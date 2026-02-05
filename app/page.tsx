"use client"

import { useState, useEffect, useRef } from "react"

// Terminal commands data
const terminalData = {
  twitter: "https://www.x.com/JoshCowellX",
  linkedin: "https://www.linkedin.com/in/jcowell/",
  github: "https://github.com/joshatoshi/",
  email: "mailto:admin@moosh.gg",
  help: [
    "",
    '<span class="command">start</span>          Initialize session',
    '<span class="command">whois</span>          Who is Joshatoshi?',
    '<span class="command">social</span>         Display social links',
    '<span class="command">help</span>           Really? You already used this buddy...',
    '<span class="command">email</span>          Contact me',
    '<span class="command">clear</span>          Clear the terminal',
    "",
  ],
  whois: [
    "",
    "Hello World!",
    "Hi I am Joshatoshi.",
    "I build things. I hack hardware and software.",
    "I talk about things. I love to share ideas with audiences",
    "I believe that upgrading today's internet (Web2) requires an upgrade to Web3.",
    "Lot's to do, and there's not much time for sleep.",
    "I am fueled by coffee!",
    "Reach out to me if you'd like to know more, or need a hand.",
    "",
  ],
  start: [
    '<span class="index">&lt;- ...Chase the white rabbit... -&gt;.</span>',
    "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",
    "@@@@@@@@@@@@@@@@@@@@@@@&&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",
    "@@@@@@@@@@@@.       .@@@@@@@@@@.   (@@@@@@@@@@@@@@@@@@@@@@",
    "@@@@@@@@@@%.          *@@@@@@@@@@/    @@@@@@@@@@@@@@@@@@@@",
    "@@@@@@@@@               @@@@@@@@@@.    @@@@@@@@@@@@@@@@@@@",
    "@@@@@@@@.                @@@@@@@@@@.    @@@@@@@@@@@@@@@@@@",
    "@@@@@@@@                 @@@@@@@@@@@    /@@@@@@@@@@@@@@@@@",
    "@@@@@@@@                 @@@@@@@@@@@    (@@@@@@@@@@@@@@@@@",
    "@@@@@@@@@               &@@@@@@@@@@.    @@@@@@@@@@@@@@@@@@",
    "@@@@@@@@@@.            @@@@@@@@@@@     ,@@@@@@@@@@@@@@@@@@",
    "@@@@@@@@@@@@%        /@@@@@@@@@@@     *@@@@@@@@@@@@@@@@@@@",
    "@@@@@@@@@@@@@@@@#*.,#@@@@@@@@@@@.  .(@@@@@@@@@@@@@@@@@@@@@",
    "@@@@@@@@@@@%,       ,#@@@@@@@@@*****(%@@@@@@@@@@@@@@@@@@@@",
    "@@@@@@@@.               .@@@@@@.        *@@@@@@@@@@@@@@@@@",
    "@@@@@@@                    @@@@.           .@@@@@@@@@@@@@@",
    "@@@@@                        &@.              &@@@@@@@@@@@",
    "@@@@* .@(              .@@@@@@@@@@",
    "@@@,                           @#                @@@@@@@@@",
    "@@&                            #@                (@@@@@@@@",
    "@@/                             @.                @@@@@@@@",
    "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",
    '<span class="color2">Welcome to the Joshatoshi mainframe terminal.</span>',
    "<span class=\"color2\">For a list of available commands, type</span> <span class=\"command\">'help'</span><span class=\"color2\">.</span>",
  ],
}

export default function Home() {
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [loadingComplete, setLoadingComplete] = useState(false)
  const [glassesAnimationComplete, setGlassesAnimationComplete] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)
  const [showMainContent, setShowMainContent] = useState(false)
  const [activeModal, setActiveModal] = useState<string | null>(null)
  const [terminalOutput, setTerminalOutput] = useState<string[]>([])
  const [commandInput, setCommandInput] = useState("")
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  
  const terminalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Loading animation
  useEffect(() => {
    if (loadingProgress >= 100) {
      setLoadingComplete(true)
      // Start glasses animation after loading
      setTimeout(() => {
        setGlassesAnimationComplete(true)
        // Start fade out after glasses animation
        setTimeout(() => {
          setFadeOut(true)
          // Show main content after fade
          setTimeout(() => {
            setShowMainContent(true)
          }, 1000)
        }, 1500)
      }, 800)
      return
    }
    const timer = setTimeout(() => {
      setLoadingProgress((prev) => Math.min(prev + 1.5, 100))
    }, 30)
    return () => clearTimeout(timer)
  }, [loadingProgress])

  // Terminal command handler
  const executeCommand = (cmd: string) => {
    const lowerCmd = cmd.toLowerCase().trim()
    const newOutput = [...terminalOutput, `guest@joshatoshi.com:~$ ${cmd}`]

    switch (lowerCmd) {
      case "help":
        setTerminalOutput([...newOutput, ...terminalData.help])
        break
      case "whois":
        setTerminalOutput([...newOutput, ...terminalData.whois])
        break
      case "start":
        setTerminalOutput([...newOutput, ...terminalData.start])
        break
      case "social":
        setTerminalOutput([
          ...newOutput,
          "",
          `twitter/X ::click me:: --->     <a href="${terminalData.twitter}" target="_blank">twitter/JoshCowellX</a>`,
          `linkedin  ::click me:: --->     <a href="${terminalData.linkedin}" target="_blank">linkedin/jcowell</a>`,
          `github    ::click me:: --->     <a href="${terminalData.github}" target="_blank">github/joshatoshi</a>`,
          "",
        ])
        break
      case "email":
        setTerminalOutput([...newOutput, `Opening mailto:<a href="${terminalData.email}">admin@.gg</a>...`])
        window.open(terminalData.email, "_blank")
        break
      case "clear":
        setTerminalOutput([])
        break
      case "twitter":
        setTerminalOutput([...newOutput, "Opening Twitter..."])
        window.open(terminalData.twitter, "_blank")
        break
      case "linkedin":
        setTerminalOutput([...newOutput, "Opening LinkedIn..."])
        window.open(terminalData.linkedin, "_blank")
        break
      case "github":
        setTerminalOutput([...newOutput, "Opening GitHub..."])
        window.open(terminalData.github, "_blank")
        break
      case "sudo":
        setTerminalOutput([...newOutput, "There is no second best..."])
        setTimeout(() => {
          window.open("https://www.youtube.com/watch?v=QhpyJSHx8LI?autoplay=1", "_blank")
        }, 1000)
        break
      default:
        setTerminalOutput([
          ...newOutput,
          `<span class="error">Command not found. For a list of commands, type <span class="command">'help'</span>.</span>`,
        ])
    }
  }

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (commandInput.trim()) {
      setCommandHistory((prev) => [...prev, commandInput])
      setHistoryIndex(-1)
      executeCommand(commandInput)
      setCommandInput("")
    }
  }

  const handleTerminalKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault()
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex
        setHistoryIndex(newIndex)
        setCommandInput(commandHistory[commandHistory.length - 1 - newIndex] || "")
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setCommandInput(commandHistory[commandHistory.length - 1 - newIndex] || "")
      } else {
        setHistoryIndex(-1)
        setCommandInput("")
      }
    }
  }

  // Auto-scroll terminal
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [terminalOutput])

  // Focus terminal input when modal opens
  useEffect(() => {
    if (activeModal === "about" && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [activeModal])

  if (!showMainContent) {
    // Calculate character opacity - fades in as loading progresses
    const characterOpacity = Math.min(loadingProgress / 60, 1)
    
    return (
      <div className={`loading-screen ${fadeOut ? "fade-out" : ""}`}>
        {/* Anime Character - Right side on desktop, centered on mobile */}
        <div 
          className="anime-character"
          style={{ opacity: characterOpacity }}
        >
          <img 
            src="/images/glasses.png"
            alt="Manga character pushing up glasses"
            className="character-image"
          />
        </div>

        {/* JSHI Text with loading bar effect */}
        <div className="jshi-container">
          <div className="jshi-text">
            <span className="jshi-letter" style={{ clipPath: `inset(0 ${Math.max(0, 100 - loadingProgress * 4)}% 0 0)` }}>J</span>
            <span className="jshi-letter" style={{ clipPath: `inset(0 ${Math.max(0, 100 - (loadingProgress - 25) * 4)}% 0 0)` }}>S</span>
            <span className="jshi-letter" style={{ clipPath: `inset(0 ${Math.max(0, 100 - (loadingProgress - 50) * 4)}% 0 0)` }}>H</span>
            <span className="jshi-letter" style={{ clipPath: `inset(0 ${Math.max(0, 100 - (loadingProgress - 75) * 4)}% 0 0)` }}>I</span>
          </div>
          <div className="loading-bar-container">
            <div className="loading-bar" style={{ width: `${loadingProgress}%` }} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <main className="manga-container">
      {/* 4-Panel Manga Grid with Background Image */}
      <div className="manga-grid">
        {/* Top Left -  Network */}
        <div className="manga-panel panel- group">
          {/* Manga background image - top left quadrant */}
          <div 
            className="panel-bg-image"
            style={{
              backgroundImage: `url('/images/background.png')`
            }}
          />
          {/* White overlay that appears on hover */}
          <div className="panel-white-overlay" />
          {/* Content that appears on hover */}
          <div className="panel-hover-content">
            <img 
              src="/images/moosh.png" 
              alt=" Network" 
              className="panel-logo"
            />
            <div className="panel-text">
              <h2> NETWORK</h2>
              <p>Peer-to-Peer Web3 Infrastructure</p>
            </div>
            <a 
              href="https://www.moosh.gg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="panel-button"
            >
              Visit moosh.gg
            </a>
          </div>
          <div className="panel-border" />
        </div>

        {/* Top Right - Future Retro Devices */}
        <div className="manga-panel panel-fetro group">
          {/* Manga background image - top right quadrant */}
          <div 
            className="panel-bg-image"
            style={{
              backgroundImage: `url('/images/background.png')`
            }}
          />
          {/* White overlay that appears on hover */}
          <div className="panel-white-overlay" />
          {/* Content that appears on hover */}
          <div className="panel-hover-content">
            <img 
              src="/images/fetro.png" 
              alt="Future Retro Devices" 
              className="panel-logo fetro-logo"
            />
            <div className="panel-text">
              <h2>FUTURE RETRO</h2>
              <p>Hardware Innovation</p>
            </div>
            <a 
              href="https://www.fetro.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="panel-button"
            >
              Visit fetro.dev
            </a>
          </div>
          <div className="panel-border" />
        </div>

        {/* Bottom Left - About/Mainframe */}
        <div className="manga-panel panel-about group">
          {/* Manga background image - bottom left quadrant */}
          <div 
            className="panel-bg-image"
            style={{
              backgroundImage: `url('/images/background.png')`
            }}
          />
          {/* White overlay that appears on hover */}
          <div className="panel-white-overlay" />
          {/* Content that appears on hover */}
          <div className="panel-hover-content">
            <div className="terminal-icon">
              <span className="terminal-prompt">{">"}_</span>
            </div>
            <div className="panel-text">
              <h2>MAINFRAME</h2>
              <p>Access Terminal</p>
            </div>
            <button 
              onClick={() => setActiveModal("about")}
              className="panel-button"
            >
              Open Terminal
            </button>
          </div>
          <div className="panel-border" />
        </div>

        {/* Bottom Right - Socials */}
        <div className="manga-panel panel-socials group">
          {/* Manga background image - bottom right quadrant */}
          <div 
            className="panel-bg-image"
            style={{
              backgroundImage: `url('/images/background.png')`
            }}
          />
          {/* White overlay that appears on hover */}
          <div className="panel-white-overlay" />
          {/* Content that appears on hover */}
          <div className="panel-hover-content">
            <div className="social-icons-preview">
              <span className="social-icon-mini">in</span>
              <span className="social-icon-mini">X</span>
              <span className="social-icon-mini">YT</span>
            </div>
            <div className="panel-text">
              <h2>CONNECT</h2>
              <p>Social Links</p>
            </div>
            <button 
              onClick={() => setActiveModal("socials")}
              className="panel-button"
            >
              View Socials
            </button>
          </div>
          <div className="panel-border" />
        </div>
      </div>

      {/* About/Mainframe Modal */}
      {activeModal === "about" && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="modal-content manga-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <span>C://Mainframe/ {"<"}--Accessing Drive--{">"}</span>
              <button onClick={() => setActiveModal(null)} className="modal-close">X</button>
            </div>
            <div className="modal-body">
              <p className="terminal-hint">Terminal 0.0.01: // Ask for &apos;help&apos;</p>
              <div className="terminal-main">
                <div
                  id="terminal-container"
                  ref={terminalRef}
                  onClick={() => inputRef.current?.focus()}
                >
                  <div id="terminal">
                    {terminalOutput.map((line, index) => (
                      <p
                        key={index}
                        className="terminal-text"
                        dangerouslySetInnerHTML={{ __html: line }}
                      />
                    ))}
                  </div>
                  <form onSubmit={handleTerminalSubmit} className="command-form">
                    <span>guest@joshatoshi.com: ~$ </span>
                    <input
                      ref={inputRef}
                      id="command-line"
                      type="text"
                      value={commandInput}
                      onChange={(e) => setCommandInput(e.target.value)}
                      onKeyDown={handleTerminalKeyDown}
                      autoComplete="off"
                      autoFocus
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Socials Modal */}
      {activeModal === "socials" && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="modal-content manga-modal socials-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <span>C://Socials/</span>
              <button onClick={() => setActiveModal(null)} className="modal-close">X</button>
            </div>
            <div className="modal-body">
              <h2 className="socials-title">Connect With Me</h2>
              <div className="social-links-grid">
                <a href="https://www.linkedin.com/in/jcowell/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <div className="social-icon-large">in</div>
                  <span>LinkedIn</span>
                </a>
                <a href="https://x.com/joshcowellx" target="_blank" rel="noopener noreferrer" className="social-link">
                  <div className="social-icon-large">X</div>
                  <span>Twitter/X</span>
                </a>
                <a href="https://www.youtube.com/@JOSHATOSHI" target="_blank" rel="noopener noreferrer" className="social-link">
                  <div className="social-icon-large">YT</div>
                  <span>YouTube</span>
                </a>
                <a href="https://github.com/joshatoshi/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <div className="social-icon-large">GH</div>
                  <span>GitHub</span>
                </a>
                <a href="mailto:admin@moosh.gg" className="social-link">
                  <div className="social-icon-large">@</div>
                  <span>Email</span>
                </a>
                <a href="https://www.moosh.gg" target="_blank" rel="noopener noreferrer" className="social-link">
                  <div className="social-icon-large">M</div>
                  <span>Moosh</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="manga-footer">
        <p>&copy; 2026 Joshatoshi.com | ABN: 69566284905 | All Rights Reserved</p>
      </footer>
    </main>
  )
}
