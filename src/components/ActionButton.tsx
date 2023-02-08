interface IActionButtonProps {
    handleClick: () => void;
    color: string;
    hoverColor: string;
    text: string;
}

export function ActionButton({handleClick, color, hoverColor, text}: IActionButtonProps) {
    return (
        <button onClick={handleClick}
                className={`${color} ${hoverColor} transition px-5 py-3 rounded-xl mx-2 uppercase font-extrabold`}
        >
            {text}
        </button>
    );
}