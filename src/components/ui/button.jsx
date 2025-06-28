export function Button({ children, variant = "default", ...props }) {
  const base = "font-semibold py-2 px-4 rounded";
  const styles = {
    default: "bg-black text-white hover:bg-gray-800",
    outline: "border border-black text-black hover:bg-gray-100",
    secondary: "bg-red-600 text-white hover:bg-red-700",
    ghost: "text-black hover:bg-gray-200",
  };
  return (
    <button className={`${base} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
}
