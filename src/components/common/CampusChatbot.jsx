import React, { useState, useRef, useEffect } from 'react';
import {
  MessageCircle,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  HelpCircle,
  Minimize2,
  Maximize2,
  RefreshCw,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { getStudentMarks, getStudentAttendance } from '../../data/storage';
import { calculateOverallAttendance, calculateStudentSummary } from '../../utils/calculations';
import { collegeInfo } from '../../data/collegeInfo';

const QUICK_PROMPTS = [
  'What is my aggregate attendance %?',
  'How is FRS attendance calculated?',
  'Check my Semester 2 SGPA & marks',
  'How to submit a complaint or suggestion?',
  'College phone numbers & contacts'
];

export function CampusChatbot() {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'bot',
      text: `Hello ${user?.name ? user.name.split(' ')[0] : 'there'}! 👋 I am your Sri Sivani Campus Assistant. How can I assist you today? You can ask about your attendance, FRS biometrics, marks, or submitting grievances.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Compute live user stats for personalized answers
  const studentStats = React.useMemo(() => {
    if (!user?.id) return null;
    const att = getStudentAttendance(user.id);
    const m = getStudentMarks(user.id);
    const attSummary = calculateOverallAttendance(att);
    const fullSummary = calculateStudentSummary(user.id, { [user.id]: m }, { [user.id]: att });
    return {
      attPct: attSummary.overallPercentage,
      totalClasses: attSummary.totalClasses,
      present: attSummary.totalPresent,
      sgpa: fullSummary.sem2.sgpa || fullSummary.sem1.sgpa,
      marksPct: fullSummary.overallPercentage,
      isPassed: fullSummary.overallStatus === 'Passed'
    };
  }, [user?.id]);

  const generateBotReply = (query) => {
    const q = query.toLowerCase();

    // 1. Attendance Query
    if (q.includes('attendance') || q.includes('present') || q.includes('absent') || q.includes('eligible')) {
      if (studentStats) {
        const eligibleText = studentStats.attPct >= 75
          ? '✓ You meet the statutory 75% minimum institutional requirement for exam appearance.'
          : '⚠ Warning: Your attendance is below 75%. Please contact your Class Coordinator.';
        return `📊 **Your Attendance Overview:**\n- Aggregate Attendance: **${studentStats.attPct}%**\n- Classes Attended: **${studentStats.present}** out of **${studentStats.totalClasses}**\n- Status: ${eligibleText}\n\nAll records are authenticated daily via the **Facial Recognition System (FRS)**.`;
      }
      return 'You can check your detailed subject-wise attendance in the **Attendance Status** tab.';
    }

    // 2. FRS Biometric Questions
    if (q.includes('frs') || q.includes('facial') || q.includes('biometric') || q.includes('face')) {
      return `📸 **Facial Recognition System (FRS) Details:**\n- Attendance calculations are strictly authenticated and synchronized daily via the institutional **Facial Recognition System (FRS)**.\n- Morning Session: **8:45 AM – 9:15 AM** at Department Entry Kiosks.\n- Afternoon Session: **1:15 PM – 1:45 PM**.\n- If your face is not recognized due to lighting or camera errors, please submit a ticket in the **Complaints & Suggestions** portal.`;
    }

    // 3. Marks & SGPA
    if (q.includes('mark') || q.includes('sgpa') || q.includes('cgpa') || q.includes('result') || q.includes('grade') || q.includes('score')) {
      if (studentStats) {
        return `🎓 **Your Academic Performance:**\n- Semester 2 SGPA: **${studentStats.sgpa.toFixed(2)}**\n- Overall Percentage: **${studentStats.marksPct}%**\n- Academic Standing: **${studentStats.isPassed ? 'Passed (All Clear)' : 'Backlog / ATKT'}**\n\nYou can view and download your full signed marks memo in **Semester Results**.`;
      }
      return 'Check your marks statement and download official transcripts under the **Marks** and **Semester Results** tabs.';
    }

    // 4. Grievance / Complaint / Suggestion
    if (q.includes('complaint') || q.includes('grievance') || q.includes('suggest') || q.includes('problem') || q.includes('issue')) {
      return `📝 **Complaints & Suggestions Box:**\nYou can log an official ticket directly from the **Complaints & Suggestions** page in your sidebar.\n- Categories include: Attendance & FRS, Academic, Hostel & Mess, Transportation, and Infrastructure.\n- Each submission generates a unique tracking ID (e.g. GRV-2026-xxx) reviewed by the Principal and Grievance Cell.`;
    }

    // 5. Contact Numbers & Helpline
    if (q.includes('phone') || q.includes('contact') || q.includes('call') || q.includes('mobile') || q.includes('email') || q.includes('principal')) {
      return `📞 **Sri Sivani College Official Contacts:**\n- Primary / Mobile: **+91-7382651411**, **+91-7382651466**\n- Alternative Lines: **+91-7382651422, 55, 77**\n- Landline: **08942-231107 / 231108**\n- General Info: **info@srisivani.com**\n- Principal: **principal@srisivani.com**\n- Vice Principal: **gtchsekhar@srisivani.com**\n\nYour registered student mobile is **${user?.studentPhone || user?.phone || '+91-9848022338'}** and parent mobile is **${user?.parentPhone || '+91-9440155622'}**.`;
    }

    // 6. Timings / Library / Hostel
    if (q.includes('timing') || q.includes('hostel') || q.includes('bus') || q.includes('transport') || q.includes('library')) {
      return `🏛️ **Campus Facility Information:**\n- College Hours: **9:00 AM – 4:30 PM** (Mon - Sat)\n- Central Library: Open **8:30 AM – 6:30 PM**\n- Bus Routes: Fleet covers Srikakulam, Tekkali, Palasa, Narasannapeta, and Amadalavalasa.\n- Hostel Warden: Contact administrative block for mess or room requests.`;
    }

    // Default intelligent response
    return `Thank you for your question! I can help you with:\n1. 📊 **Attendance & FRS** - Live percentage and biometric sync\n2. 🎓 **Marks & SGPA** - Grades, scores, and official transcripts\n3. 📝 **Complaints & Suggestions** - Submit an official redressal ticket\n4. 📞 **Contact Information** - Faculty and administrative hotlines\n\nPlease select one of the quick prompt buttons below or type your query!`;
  };

  const handleSendMessage = (textToSend) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    const userMsg = {
      id: Date.now().toString(),
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botReplyText = generateBotReply(text);
      const botMsg = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botReplyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 450);
  };

  const handleQuickPrompt = (prompt) => {
    handleSendMessage(prompt);
  };

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 110 }}>
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
            color: '#ffffff',
            border: 'none',
            borderRadius: 'var(--radius-full)',
            padding: '0.85rem 1.35rem',
            boxShadow: '0 10px 25px -5px rgba(30, 64, 175, 0.4), 0 8px 10px -6px rgba(30, 64, 175, 0.2)',
            cursor: 'pointer',
            fontSize: '0.925rem',
            fontWeight: '700',
            transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transform: 'scale(1)'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          id="campus-chatbot-toggle-btn"
        >
          <div style={{ position: 'relative' }}>
            <Bot size={22} />
            <span style={{ position: 'absolute', top: '-2px', right: '-2px', width: '8px', height: '8px', backgroundColor: '#10b981', borderRadius: '50%', border: '2px solid #ffffff' }} />
          </div>
          <span>Campus AI Assistant</span>
        </button>
      )}

      {/* Chat Window Container */}
      {isOpen && (
        <div
          style={{
            width: '380px',
            height: '520px',
            backgroundColor: '#ffffff',
            borderRadius: 'var(--radius-xl)',
            boxShadow: '0 20px 35px -5px rgba(15, 23, 42, 0.25), 0 10px 10px -5px rgba(15, 23, 42, 0.1)',
            border: '1px solid var(--border-subtle)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            animation: 'modalFadeIn 0.2s ease-out'
          }}
          id="campus-chatbot-window"
        >
          {/* Header */}
          <div
            style={{
              background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
              color: '#ffffff',
              padding: '1rem 1.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Bot size={20} color="#ffffff" />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: '800', letterSpacing: '-0.01em' }}>
                  Sri Sivani Assistant
                </h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.725rem', color: '#bfdbfe' }}>
                  <span style={{ width: '6px', height: '6px', backgroundColor: '#10b981', borderRadius: '50%' }} />
                  <span>Online • Live FRS &amp; Academic Data</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#ffffff',
                  cursor: 'pointer',
                  padding: '0.35rem',
                  borderRadius: '4px',
                  opacity: 0.85
                }}
                title="Close chat"
                id="close-chatbot-btn"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div
            style={{
              flex: 1,
              padding: '1rem',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem',
              backgroundColor: '#f8fafc'
            }}
          >
            {messages.map(msg => {
              const isUser = msg.sender === 'user';
              return (
                <div
                  key={msg.id}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: isUser ? 'flex-end' : 'flex-start',
                    maxWidth: '88%',
                    alignSelf: isUser ? 'flex-end' : 'flex-start'
                  }}
                >
                  <div
                    style={{
                      backgroundColor: isUser ? 'var(--primary-700)' : '#ffffff',
                      color: isUser ? '#ffffff' : 'var(--text-primary)',
                      padding: '0.75rem 0.95rem',
                      borderRadius: isUser ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                      fontSize: '0.845rem',
                      lineHeight: 1.45,
                      boxShadow: 'var(--shadow-sm)',
                      border: isUser ? 'none' : '1px solid var(--border-light)',
                      whiteSpace: 'pre-line'
                    }}
                  >
                    {msg.text}
                  </div>
                  <span style={{ fontSize: '0.675rem', color: 'var(--text-muted)', marginTop: '0.2rem', padding: '0 0.25rem' }}>
                    {msg.timestamp}
                  </span>
                </div>
              );
            })}

            {isTyping && (
              <div style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.5rem 0.85rem', backgroundColor: '#ffffff', borderRadius: '14px', border: '1px solid var(--border-light)', fontSize: '0.775rem', color: 'var(--text-muted)' }}>
                <Sparkles size={13} className="spin" />
                <span>Assistant is typing...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompt Pills */}
          <div
            style={{
              padding: '0.5rem 0.75rem',
              backgroundColor: '#f1f5f9',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              gap: '0.4rem',
              overflowX: 'auto',
              whiteSpace: 'nowrap'
            }}
          >
            {QUICK_PROMPTS.map((prompt, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleQuickPrompt(prompt)}
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-full)',
                  padding: '0.25rem 0.65rem',
                  fontSize: '0.725rem',
                  color: 'var(--primary-800)',
                  fontWeight: '600',
                  cursor: 'pointer',
                  flexShrink: 0
                }}
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            style={{
              padding: '0.75rem 1rem',
              borderTop: '1px solid var(--border-light)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: '#ffffff'
            }}
          >
            <input
              type="text"
              className="form-input"
              placeholder="Ask about attendance, FRS, marks..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              style={{ flex: 1, padding: '0.55rem 0.85rem', fontSize: '0.85rem' }}
              id="chatbot-input-field"
            />
            <button
              type="submit"
              className="btn btn-primary"
              style={{ padding: '0.55rem 0.85rem' }}
              disabled={!inputValue.trim()}
              id="chatbot-send-btn"
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
