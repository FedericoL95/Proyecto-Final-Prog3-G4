export default function Avatar({ src, alt, size = 50 }) {
    return (
        <img
            src={src}
            alt={alt}
            className="avatar"
            style={{ width: size, height: size, borderRadius: "50%" }}
        />
    );
}