export default function Badge({ text, color = "blue" }) {
    return (
        <span className="badge" style={{ backgroundColor: color }}>
            {text}
        </span>
    );
}