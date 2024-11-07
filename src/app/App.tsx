import Provider from './Provider';
import EntryPoint from './Router';

export default function App() {
    return (
        <Provider>
            <EntryPoint />
        </Provider>
    );
}
