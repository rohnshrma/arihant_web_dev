import React, { useState } from 'react'
import './App.css'

// these are just some random pics i grabbed from unsplash for the post grid
const mockPosts = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1610088441520-4352457e7095?q=80&w=987&auto=format&fit=crop',
]

const Profile = () => {
  // this keeps track of which post image to show in the modal when you click on one
  const [modalImg, setModalImg] = useState(null)

  // smaller versions of the same pics for the story highlights at the top
  const storyImages = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=70&h=70&fit=crop',
    'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=70&h=70&fit=crop',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=70&h=70&fit=crop',
  ]

  return (
    // main container - max width like instagram, centered, some padding
    <div className="profile-page" style={{ maxWidth: 935, margin: '0 auto', padding: 20 }}>
      {/* top section with profile pic, username, stats, bio */}
      <div className="profile-header" style={{ display: 'flex', alignItems: 'center', gap: 40, flexWrap: 'wrap' }}>
        {/* profile picture on the left */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
            alt="profile"
            className="profile-avatar"
            style={{ width: 150, height: 150, borderRadius: '50%', objectFit: 'cover', border: '2px solid #dbdbdb' }}
          />
        </div>
        {/* all the text stuff on the right */}
        <div style={{ flex: 1, minWidth: 250 }}>
          {/* username and more options button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 28, fontWeight: 300 }}>john_doe</span>
            <button className="icon-btn" style={{ fontSize: 18, border: 'none', background: 'none', cursor: 'pointer' }}>⋯</button>
          </div>
          {/* the stats row - posts, followers, following */}
          <div style={{ display: 'flex', gap: 30, margin: '20px 0' }}>
            <span><b>8</b> posts</span>
            <span><b>1,234</b> followers</span>
            <span><b>321</b> following</span>
          </div>
          {/* display name and bio */}
          <div style={{ fontWeight: 600 }}>John Doe</div>
          <div style={{ color: '#262626' }}>Photography enthusiast | Coffee lover ☕️ | Travel addict ✈️</div>
        </div>
      </div>
      {/* story highlights section - those circles at the top */}
      <div style={{ display: 'flex', gap: 20, margin: '40px 0 30px 0', flexWrap: 'wrap' }}>
        {storyImages.map((image, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* the gradient circle container */}
            <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 6 }}>
              <img src={image} alt="story" style={{ width: 70, height: 70, borderRadius: '50%', objectFit: 'cover', border: '2px solid #fff' }} />
            </div>
            <span style={{ fontSize: 14 }}>Highlight {i + 1}</span>
          </div>
        ))}
      </div>
      {/* the tabs - posts, reels, tagged (only posts works for now) */}
      <div style={{ borderTop: '1px solid #dbdbdb', marginBottom: 20, display: 'flex', justifyContent: 'center', gap: 40, fontWeight: 600, letterSpacing: 1 }}>
        <span style={{ padding: 16, borderTop: '2px solid #262626' }}>POSTS</span>
        <span style={{ padding: 16, color: '#8e8e8e', cursor: 'not-allowed' }}>REELS</span>
        <span style={{ padding: 16, color: '#8e8e8e', cursor: 'not-allowed' }}>TAGGED</span>
      </div>
      {/* the main post grid - responsive grid that adjusts based on screen size */}
      <div className="profile-posts-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
        {mockPosts.map((url, idx) => (
          <div
            key={idx}
            className="profile-post-item"
            style={{ width: '100%', aspectRatio: '1/1', background: '#fafafa', borderRadius: 8, overflow: 'hidden', position: 'relative', cursor: 'pointer', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
            onClick={() => setModalImg(url)}
          >
            <img src={url} alt="post" className="profile-post-img" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.2s' }} />
            {/* overlay that shows on hover with like/comment icons */}
            <div className="profile-post-overlay">
              <span style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#fff', fontWeight: 600, fontSize: 18 }}>
                <svg width="22" height="22" fill="#fff" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg> 123
                <svg width="22" height="22" fill="#fff" viewBox="0 0 24 24"><path d="M21 6.5a2.5 2.5 0 0 0-2.5-2.5h-13A2.5 2.5 0 0 0 3 6.5v11A2.5 2.5 0 0 0 5.5 20H19l2 2V6.5z"/></svg> 45
              </span>
            </div>
          </div>
        ))}
      </div>
      {/* modal popup when you click a post - fullscreen overlay */}
      {modalImg && (
        <div className="profile-modal" onClick={() => setModalImg(null)}>
          <div className="profile-modal-content" onClick={e => e.stopPropagation()}>
            <img src={modalImg} alt="modal post" style={{ maxWidth: '90vw', maxHeight: '80vh', borderRadius: 12 }} />
            <button className="profile-modal-close" onClick={() => setModalImg(null)}>&times;</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Profile