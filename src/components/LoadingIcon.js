import './LoadingIcon.css';

function LoadingIcon() {
    return (
        <section className='loading'>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25" cy="25" r="20" stroke="currentColor" strokeWidth="4" fill="none"
                    strokeLinecap="round" strokeDasharray="100" strokeDashoffset="0">
                    <animateTransform attributeType="XML" attributeName="transform" type="rotate"
                        from="0 25 25" to="360 25 25" dur="1s" repeatCount="indefinite" />
                </circle>
            </svg>
        </section>
    )
}

export default LoadingIcon;