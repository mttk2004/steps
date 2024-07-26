export default function Button({ bgColor, textColor, children, onClick }) {
	return <button style={{backgroundColor: bgColor, color: textColor}} onClick={onClick} >
		{children}
	</button>
}
