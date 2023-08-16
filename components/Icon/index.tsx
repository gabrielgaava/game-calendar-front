import { icons } from './icons';

export default function Icon({ name, size, color }: any) {
    return (
        <div style={{ width: size, height: size }}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill={color}>
                {icons[name]}
            </svg>
        </div>
    )
}