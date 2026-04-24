import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
      console.error('Missing environment variables: EMAIL_USER or EMAIL_APP_PASSWORD');
      return NextResponse.json(
        { error: 'Email configuration is missing. Please contact the administrator.' },
        { status: 500 }
      );
    }

    console.log('Creating transporter with:', {
      user: process.env.EMAIL_USER,
      passwordLength: process.env.EMAIL_APP_PASSWORD?.length
    });

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log('Transporter verified successfully');
    } catch (verifyError) {
      console.error('Transporter verification failed:', verifyError);
      return NextResponse.json(
        { error: 'Email configuration error. Please check your credentials.' },
        { status: 500 }
      );
    }

    // Email to YOU (the portfolio owner)
    const mailToYou = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Courier New', monospace; background-color: #0a0a0a; color: #ffffff; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background-color: #1a1a1a; border: 2px solid #00ffff; padding: 30px; }
            .header { border-bottom: 2px solid #00ffff; padding-bottom: 15px; margin-bottom: 20px; }
            .header h1 { color: #00ffff; margin: 0; font-size: 24px; }
            .field { margin-bottom: 15px; }
            .label { color: #00ffff; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; }
            .value { color: #ffffff; margin-top: 5px; padding: 10px; background-color: #0a0a0a; border-left: 3px solid #00ffff; }
            .footer { margin-top: 30px; padding-top: 15px; border-top: 1px solid #333; font-size: 10px; color: #666; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🚀 NEW CONTACT MESSAGE</h1>
            </div>
            
            <div class="field">
              <div class="label">From:</div>
              <div class="value">${name}</div>
            </div>
            
            <div class="field">
              <div class="label">Email:</div>
              <div class="value"><a href="mailto:${email}" style="color: #00ffff;">${email}</a></div>
            </div>
            
            <div class="field">
              <div class="label">Subject:</div>
              <div class="value">${subject}</div>
            </div>
            
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${message.replace(/\n/g, '<br>')}</div>
            </div>
            
            <div class="footer">
              <p>Sent from your portfolio contact form</p>
              <p>Reply directly to: ${email}</p>
            </div>
          </div>
        </body>
        </html>
      `,
      replyTo: email,
    };

    // Confirmation email to SENDER
    const mailToSender = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Message Received - Rudra Ka.Patel`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Courier New', monospace; background-color: #0a0a0a; color: #ffffff; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background-color: #1a1a1a; border: 2px solid #00ffff; padding: 30px; }
            .header { text-align: center; border-bottom: 2px solid #00ffff; padding-bottom: 20px; margin-bottom: 25px; }
            .header h1 { color: #00ffff; margin: 0; font-size: 28px; }
            .status { background-color: rgba(0, 255, 255, 0.1); border-left: 4px solid #00ffff; padding: 15px; margin: 20px 0; }
            .content { line-height: 1.8; }
            .highlight { color: #00ffff; font-weight: bold; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #333; font-size: 11px; color: #666; text-align: center; }
            .button { display: inline-block; background-color: #00ffff; color: #0a0a0a; padding: 12px 30px; text-decoration: none; font-weight: bold; margin: 20px 0; text-transform: uppercase; letter-spacing: 1px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>✓ MESSAGE RECEIVED</h1>
            </div>
            
            <div class="status">
              <strong style="color: #00ffff;">SYSTEM STATUS:</strong> Your message has been successfully delivered.
            </div>
            
            <div class="content">
              <p>Hi <strong>${name}</strong>,</p>
              
              <p>Thank you for reaching out! I've received your message regarding "<span class="highlight">${subject}</span>" and I'll get back to you within <span class="highlight">24 hours</span>.</p>
              
              <p>In the meantime, feel free to check out my:</p>
              <ul>
                <li><a href="https://github.com/Rockermaze" style="color: #00ffff;">GitHub Projects</a></li>
                <li><a href="https://www.linkedin.com/in/rudra-kapatel/" style="color: #00ffff;">LinkedIn Profile</a></li>
              </ul>
              
              <p>Looking forward to connecting with you!</p>
              
              <p style="margin-top: 30px;">
                Best regards,<br>
                <strong style="color: #00ffff;">Rudra Ka.Patel</strong><br>
                <span style="color: #666;">AI & Full Stack Developer</span>
              </p>
            </div>
            
            <div class="footer">
              <p>This is an automated confirmation. Please do not reply to this email.</p>
              <p>For urgent matters, contact me directly at ${process.env.EMAIL_USER}</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send both emails
    console.log('Sending email to you...');
    await transporter.sendMail(mailToYou);
    console.log('Email to you sent successfully');

    console.log('Sending confirmation email to sender...');
    await transporter.sendMail(mailToSender);
    console.log('Confirmation email sent successfully');

    return NextResponse.json(
      { message: 'Emails sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email error details:', {
      message: error.message,
      code: error.code,
      command: error.command,
      response: error.response,
      stack: error.stack
    });
    return NextResponse.json(
      { error: `Failed to send email: ${error.message}` },
      { status: 500 }
    );
  }
}
