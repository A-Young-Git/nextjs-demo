import LikeButton from './like-button';

function Header({ title }) {
    return <h1>{ title ? title : 'Default Title' }</h1>;
}

export default function HomePage() {

    const names = ['Ada Banan', 'Jetson', 'Tony', 'Julianis'];

    return (
        <div>
            <Header title="Millionaire" />
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <LikeButton />
        </div>
    );
}
