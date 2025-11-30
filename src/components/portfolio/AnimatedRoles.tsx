'use client';

import { useState, useEffect } from 'react';

const roles = ['Full-Stack Developer', 'Backend Developer', 'Frontend Developer'];

export default function AnimatedRoles() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[currentRoleIndex];
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const typingSpeed = isDeleting ? 100 : 150;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <div className="mt-4 text-xl md:text-2xl font-semibold h-8 text-center md:text-left">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{currentText}</span>
      <span className="animate-ping text-purple-400">|</span>
    </div>
  );
}
