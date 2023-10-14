export const Section = ({ children, title }) => {
  return (
    <div>
      <p>{title}</p>
      {children}
    </div>
  );
};
