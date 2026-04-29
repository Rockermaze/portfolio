"use client"

import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 border border-red-500/30 bg-red-500/5 rounded-lg text-center">
          <h2 className="text-xl font-mono text-red-500 mb-2">Component_Crash_Detected</h2>
          <p className="text-text-secondary text-sm">Something went wrong in this section.</p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="mt-4 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-500 font-mono text-xs transition-colors"
          >
            RETRY_LOAD()
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
