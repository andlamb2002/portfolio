function Footer() {
    const year = new Date().getFullYear();  

    return (
        <div className="bg-gray-200 py-6">
            <div className="px-6 flex flex-col items-center">

                <span>Built with React by Andreas Lambropoulos, {year}</span>

                <ul className="flex space-x-6 mt-4">
                    <li><a href="https://github.com/andlamb2002" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/andreas-k-lambropoulos/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="https://www.youtube.com/@andreaslambropoulos1159" target="_blank" rel="noopener noreferrer">YouTube</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer