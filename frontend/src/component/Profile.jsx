import React, { useEffect, useState } from 'react';
import '../css/Profile.css'; // You can still keep this file for extra styling if needed

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return (
      <div style={styles.noProfileContainer}>
        <p style={styles.noProfileText}>Please login to view your profile.</p>
      </div>
    );
  }

  return (
    <div style={styles.profileContainer}>
      <div style={styles.cardContainer}>
        <h2 style={styles.header}>User Profile</h2>
        <div style={styles.profileCard}>
          <div style={styles.profileDetails}>
            <p style={styles.profileText}><strong>Name:</strong> {user.name}</p>
            <p style={styles.profileText}><strong>Email:</strong> {user.email}</p>
            <p style={styles.profileText}><strong>Mobile Number:</strong> {user.number}</p>
            <p style={styles.profileText}><strong>Password:</strong> ********{user.password}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  profileContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '520px',
    background: 'rgba(218, 215, 29, 0.53)', // Gorgeous background gradient
    padding: '0 20px',
  },
  cardContainer: {
    maxWidth: '650px',
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Elegant box shadow for depth
    padding: '40px',
    textAlign: 'center',
    transition: 'transform 0.3s ease', // Smooth hover transition
  },
  header: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#2d2d2d',
    marginBottom: '30px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`, // Modern font
  },
  profileCard: {
    padding: '20px 30px',
    borderRadius: '12px',
    backgroundColor: '#f8f9fc',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  profileDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    textAlign: 'left',
    fontSize: '18px',
  },
  profileText: {
    color: '#333',
    fontWeight: '500',
    lineHeight: '1.8',
    fontSize: '18px',
  },
  noProfileContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: '#f1f1f1',
    color: '#777',
  },
  noProfileText: {
    fontSize: '24px',
    color: '#555',
    fontWeight: '600',
    textAlign: 'center',
  },
};

export default Profile;
