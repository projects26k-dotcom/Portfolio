const BackToTop = () => {
  return <button type="button" aria-label="Back to top" className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>✎<span>top</span></button>;
};

export default BackToTop;
