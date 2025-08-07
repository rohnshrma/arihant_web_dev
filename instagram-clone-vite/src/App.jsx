// bring in useState hook - this lets us keep track of things that change in our app
import { useState } from 'react'

// bring in our CSS file that makes everything look good
import './App.css'

// bring in the tools we need for navigation between pages
import { Routes, Route, Link } from 'react-router-dom'

// bring in our Profile page component
import Profile from './Profile.jsx'

// this is our main App component - it's like the boss of our entire Instagram app
const App = () => {
  // this is where we store all our Instagram posts
  // useState is like a smart box that remembers our posts and can update them
  // the [posts] part is what we call the posts, and the part after = is our initial data
  const [posts] = useState([
    {
      id: 1, // each post needs a unique ID so React can keep track of them
      username: 'travel_lover', // who posted this
      userImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face', // their profile picture
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop', // the actual post image
      likes: 1234, // how many people liked this post
      caption: 'Amazing sunset at the beach today! 🌅 #sunset #beach #nature', // what they wrote
      comments: [ // all the comments on this post
        { id: 1, username: 'nature_fan', text: 'Beautiful shot! 😍' },
        { id: 2, username: 'photography_lover', text: 'Stunning colors!' }
      ],
      timestamp: '2 hours ago' // when it was posted
    },
    {
      id: 2,
      username: 'food_blogger',
      userImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=600&fit=crop',
      likes: 856,
      caption: 'Homemade pizza night! 🍕 Nothing beats fresh ingredients #food #pizza #homemade',
      comments: [
        { id: 3, username: 'chef_mike', text: 'Looks delicious! Recipe?' },
        { id: 4, username: 'foodie_123', text: 'Yum! 😋' }
      ],
      timestamp: '5 hours ago'
    },
    {
      id: 3,
      username: 'fitness_motivation',
      userImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop',
      likes: 2341,
      caption: 'Morning workout complete! 💪 Consistency is key #fitness #motivation #workout',
      comments: [
        { id: 5, username: 'gym_buddy', text: 'Keep it up! 💪' },
        { id: 6, username: 'fitness_goals', text: 'Inspiring! 🔥' }
      ],
      timestamp: '1 day ago'
    },
    {
      id: 4,
      username: 'art_creator',
      userImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=600&fit=crop',
      likes: 1892,
      caption: 'New painting finished! 🎨 Abstract art is my passion #art #painting #creative',
      comments: [
        { id: 7, username: 'art_lover', text: 'This is incredible! 🎨' },
        { id: 8, username: 'creative_soul', text: 'Love the colors!' }
      ],
      timestamp: '3 hours ago'
    },
    {
      id: 5,
      username: 'coffee_addict',
      userImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=600&fit=crop',
      likes: 567,
      caption: 'Perfect morning coffee ☕️ Nothing beats a good brew #coffee #morning #lifestyle',
      comments: [
        { id: 9, username: 'coffee_lover', text: 'Looks perfect! ☕️' },
        { id: 10, username: 'morning_person', text: 'Great way to start the day!' }
      ],
      timestamp: '6 hours ago'
    },
    {
      id: 6,
      username: 'pet_lover',
      userImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=600&fit=crop',
      likes: 3421,
      caption: 'My adorable puppy! 🐕 So much love and energy #pets #dog #cute',
      comments: [
        { id: 11, username: 'dog_lover', text: 'So cute! 🐕❤️' },
        { id: 12, username: 'pet_parent', text: 'What a sweetheart!' }
      ],
      timestamp: '4 hours ago'
    },
    {
      id: 7,
      username: 'tech_geek',
      userImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D',
      likes: 892,
      caption: 'New coding setup! 💻 Productivity level: maximum #tech #coding #setup',
      comments: [
        { id: 13, username: 'developer', text: 'Clean setup! 💻' },
        { id: 14, username: 'tech_enthusiast', text: 'Love the minimal design!' }
      ],
      timestamp: '1 day ago'
    },
    {
      id: 8,
      username: 'nature_photographer',
      userImage: 'https://images.unsplash.com/photo-1610088441520-4352457e7095?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
      likes: 1567,
      caption: 'Mountain sunrise captured! 🌄 Nature never disappoints #photography #nature #mountains',
      comments: [
        { id: 15, username: 'photo_lover', text: 'Breathtaking! 📸' },
        { id: 16, username: 'nature_fan', text: 'Absolutely stunning!' }
      ],
      timestamp: '8 hours ago'
    }
  ])

  // this keeps track of which posts you've liked
  // Set is like a special list that only stores unique items
  // so if you like a post twice, it only counts once
  const [likedPosts, setLikedPosts] = useState(new Set())

  // this keeps track of the actual like counts for each post
  // we need this because we want to update the count when someone likes/unlikes
  const [postLikes, setPostLikes] = useState(() => {
    // create an object where each post ID maps to its like count
    const initialLikes = {}
    posts.forEach(post => {
      initialLikes[post.id] = post.likes
    })
    return initialLikes
  })

  // this function handles when someone clicks the like button
  // it takes the post ID and either adds or removes it from the liked posts
  // and also updates the like count accordingly
  const handleLike = (postId) => {
    // check if the post is currently liked
    const isCurrentlyLiked = likedPosts.has(postId)
    
    // update the liked posts set
    setLikedPosts(prevLikedPosts => {
      const newLikedPosts = new Set(prevLikedPosts) // make a copy of our current liked posts
      
      if (isCurrentlyLiked) {
        newLikedPosts.delete(postId) // if already liked, unlike it
      } else {
        newLikedPosts.add(postId) // if not liked, like it
      }
      
      return newLikedPosts
    })
    
    // update the like count separately
    setPostLikes(prevLikes => ({
      ...prevLikes,
      [postId]: isCurrentlyLiked ? prevLikes[postId] - 1 : prevLikes[postId] + 1
    }))
  }

  // these are our custom icons - they're just SVG shapes that look like Instagram icons
  // each one is a function that returns an SVG element
  
  // the home icon - looks like a house
  const HomeIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 9v13h20V9l-10-7zM12 4.5L19 10v11H5V10l7-5.5z"/>
      <path d="M9 14h6v6H9z"/>
    </svg>
  )

  // the message icon - looks like a chat bubble
  const MessageIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
    </svg>
  )

  // the create icon - looks like a plus sign
  const CreateIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
    </svg>
  )

  // the heart icon - can be filled or empty depending on if you liked something
  const HeartIcon = ({ filled = false }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  )

  // the profile icon - looks like a person
  const ProfileIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
  )

  // the like icon for posts - same as heart but specifically for post likes
  const LikeIcon = ({ filled = false }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  )

  // the comment icon - looks like a speech bubble
  const CommentIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  )

  // the share icon - looks like a send/share button
  const ShareIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
    </svg>
  )

  // the bookmark icon - looks like a bookmark
  const BookmarkIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
    </svg>
  )

  // the more options icon - looks like three dots
  const MoreIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
    </svg>
  )

  // this function creates a single post - it takes all the post data and returns the HTML
  // the { } at the start is called destructuring - it's a quick way to get all the data we need
  const renderPost = ({ id, username, userImage, image, caption, comments, timestamp }) => (
    <div key={id} className="post">
      <div className="post-header">
        <div className="post-user">
          <img src={userImage} alt={username} className="user-avatar" />
          <span className="username">{username}</span>
        </div>
        <button className="more-btn">
          <MoreIcon />
        </button>
      </div>
      
      <div className="post-image">
        <img src={image} alt="post" />
      </div>
      
      <div className="post-actions">
        <div className="action-buttons">
          <button 
            className={`like-btn ${likedPosts.has(id) ? 'liked' : ''}`}
            onClick={() => handleLike(id)}
          >
            <LikeIcon filled={likedPosts.has(id)} />
          </button>
          <button className="action-btn">
            <CommentIcon />
          </button>
          <button className="action-btn">
            <ShareIcon />
          </button>
        </div>
        <button className="action-btn bookmark-btn">
          <BookmarkIcon />
        </button>
      </div>
      
      <div className="post-info">
        <div className="likes">{postLikes[id].toLocaleString()} likes</div>
        <div className="caption">
          <span className="username">{username}</span> {caption}
        </div>
        <div className="comments">
          {comments.map(({ id: commentId, username: commentUsername, text }) => (
            <div key={commentId} className="comment">
              <span className="username">{commentUsername}</span> {text}
            </div>
          ))}
        </div>
        <div className="timestamp">{timestamp}</div>
      </div>
      
      <div className="add-comment">
        <input type="text" placeholder="Add a comment..." />
        <button className="post-btn">Post</button>
      </div>
    </div>
  )

  // this function creates a story item - those circles at the top of Instagram
  const renderStory = ({ username, userImage }) => (
    <div key={username} className="story-item">
      <div className="story-avatar">
        <img src={userImage} alt="story" />
      </div>
      <span>{username}</span>
    </div>
  )

  // this function creates a suggestion item - those "follow this person" suggestions
  const renderSuggestion = ({ username, userImage, follows, isNew }) => (
    <div key={username} className="suggestion-item">
      <img src={userImage} alt="suggestion" />
      <div className="suggestion-info">
        <span className="username">{username}</span>
        <span className="follows">{isNew ? 'New to Instagram' : follows}</span>
      </div>
      <button className="follow-btn">Follow</button>
    </div>
  )

  // this is our sample data for stories - the circles at the top
  const stories = [
    { username: 'travel_lover', userImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face' },
    { username: 'food_blogger', userImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face' },
    { username: 'fitness_motivation', userImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face' },
    { username: 'art_creator', userImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face' },
    { username: 'coffee_addict', userImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face' },
    { username: 'pet_lover', userImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face' },
    { username: 'tech_geek', userImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face' },
    { username: 'nature_photographer', userImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face' }
  ]

  // this is our sample data for suggestions - the "follow this person" section
  const suggestions = [
    { username: 'suggested_user', userImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face', follows: 'Follows you', isNew: false },
    { username: 'another_user', userImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face', follows: '', isNew: true },
    { username: 'creative_mind', userImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face', follows: 'New to Instagram', isNew: true },
    { username: 'travel_enthusiast', userImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face', follows: 'Follows you', isNew: false },
    { username: 'food_critic', userImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face', follows: 'New to Instagram', isNew: true }
  ]

  // these are the footer links - all those small links at the bottom of Instagram
  const footerLinks = [
    'Meta', 'About', 'Blog', 'Jobs', 'Help', 'API', 'Privacy', 
    'Terms', 'Top Accounts', 'Hashtags', 'Locations', 'Instagram Lite', 'Threads'
  ]

  // this is what our app actually returns - all the HTML that gets put on the page
  return (
    <div className="app">
      {/* this is the navigation bar at the top - like the header of Instagram */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="nav-left">
            <h1 className="logo">Instagram</h1>
          </div>
          <div className="nav-center">
            <div className="search-box">
              <input type="text" placeholder="Search" />
            </div>
          </div>
          <div className="nav-right">
            <div className="nav-icons">
              <Link to="/" className="icon-btn" title="Home"><HomeIcon /></Link>
              <button className="icon-btn" title="Messages"><MessageIcon /></button>
              <button className="icon-btn" title="Create"><CreateIcon /></button>
              <button className="icon-btn" title="Notifications"><HeartIcon /></button>
              <Link to="/profile" className="icon-btn" title="Profile"><ProfileIcon /></Link>
            </div>
          </div>
        </div>
      </nav>
      {/* this is where we set up our routes - different pages for different URLs */}
      <Routes>
        {/* this is the homepage route - when someone goes to "/" */}
        <Route path="/" element={
          <div className="main-container">
            <div className="content">
              {/* this is the stories section - those circles at the top */}
              <div className="stories">
                {stories.map(renderStory)}
              </div>
              {/* this is where all the posts go */}
              <div className="posts">
                {posts.map(renderPost)}
              </div>
            </div>
            {/* this is the sidebar - the right side with profile and suggestions */}
            <div className="sidebar">
              <div className="profile-section">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face" alt="profile" className="profile-avatar" />
                <div className="profile-info">
                  <span className="username">your_username</span>
                  <span className="name">Your Name</span>
                </div>
                <button className="switch-btn">Switch</button>
              </div>
              <div className="suggestions">
                <div className="suggestions-header">
                  <span>Suggestions for you</span>
                  <button className="see-all-btn">See All</button>
                </div>
                {suggestions.map(renderSuggestion)}
              </div>
            </div>
          </div>
        } />
        {/* this is the profile page route - when someone goes to "/profile" */}
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {/* this is the footer - all those small links at the bottom */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            {footerLinks.map(link => (
              <a key={link} href="#">{link}</a>
            ))}
          </div>
          <div className="footer-copyright">
            <span>© 2024 Instagram from Meta</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

// this exports our App component so other files can use it
export default App
