import React from 'react';

function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">About Us</h1>
      <div className="prose lg:prose-xl">
        <p className="text-gray-600">
          We are a team of passionate developers dedicated to creating innovative solutions
          for our clients. With years of experience in the industry, we strive to deliver
          high-quality software that makes a difference.
        </p>
      </div>
    </div>
  );
}

export default About;
