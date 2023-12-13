import trollFaceImg from './public/troll-face.png'

export default function Header() {
    return (
        <header className="header">
            <img 
                src={trollFaceImg} 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">The best memes are always random</h4>
        </header>
    )
}