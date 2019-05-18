import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <p>This is header</p>
        
        
        <style jsx>{`
            header{
                width: 100%;
                height: 100px;
                background: #ccc;
                text-align: center;
                line-height: 100px;
            }
        `}</style>
        </header>
    )
}