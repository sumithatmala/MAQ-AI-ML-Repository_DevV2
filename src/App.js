import React from "react";
import "./App.css";
import Navigation from "./navigation/Navigation";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./components/views/Footer";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <meta
          name="title"
          content="AI Solutions for Diverse Industries | Transform Your Business with AI | MAQ Software"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Discover MAQ Software's cutting-edge solutions in Generative AI, GPT, and Artificial Intelligence & Machine Learning. Explore our innovative products including Session Information Bot, Feedback Summarizer Bot, Intelligent Document Processing Bot, Document Classification Bot, Smart Support Framework, TriviaBot, Support Ticket Assistant, Sales Assistant, and Test Case Recommender. Enhance your business efficiency with our advanced AI and ML technologies."
        />
        <meta
          name="keywords"
          content="MAQ Software, AI, Artificial Intelligence, Machine Learning, Generative AI, GPT, Session Information Bot, Feedback Summarizer Bot, Intelligent Document Processing Bot, Document Classification Bot, Smart Support Framework, TriviaBot, Support Ticket Assistant, Sales Assistant, Test Case Recommender"
        />
        <meta name="robots" content="index, follow" />

        <link rel="stylesheet" href="../src/css/style.css" />

        <meta
          property="og:title"
          content="AI Solutions for Diverse Industries | Transform Your Business with AI | MAQ Software"
        />
        <meta
          property="og:description"
          content="Discover MAQ Software's cutting-edge solutions in Generative AI, GPT, and Artificial Intelligence & Machine Learning. Explore our innovative products including Session Information Bot, Feedback Summarizer Bot, Intelligent Document Processing Bot, Document Classification Bot, Smart Support Framework, TriviaBot, Support Ticket Assistant, Sales Assistant, and Test Case Recommender. Enhance your business efficiency with our advanced AI and ML technologies."
        />
        <meta
          property="og:image"
          content="https://maqhatimd.github.io/img/MAQSoftware_square.png"
        />
        <meta property="og:image:width" content="450" />
        <meta property="og:image:height" content="298" />
        <meta property="og:type" content="website" />
        <meta name="author" content="MAQ Software" />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="AI Solutions for Diverse Industries | Transform Your Business with AI | MAQ Software"
        />
        <meta
          name="twitter:description"
          content="Discover MAQ Software's cutting-edge solutions in Generative AI, GPT, and Artificial Intelligence & Machine Learning. Explore our innovative products including Session Information Bot, Feedback Summarizer Bot, Intelligent Document Processing Bot, Document Classification Bot, Smart Support Framework, TriviaBot, Support Ticket Assistant, Sales Assistant, and Test Case Recommender. Enhance your business efficiency with our advanced AI and ML technologies."
        />
        <meta
          name="twitter:image"
          content="https://maqhatimd.github.io/img/MAQSoftware_square.png"
        />
      </Helmet>
      <Navigation />
      <Footer />
    </>
  );
}

export default App;
