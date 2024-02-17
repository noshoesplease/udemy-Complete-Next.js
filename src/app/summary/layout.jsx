const SummaryLayout = ({ children, aboutme, cv }) => {
  return (
    <div className="summary-page-container">
      {children}
      {aboutme}
      {cv}
    </div>
  );
};

export default SummaryLayout;
