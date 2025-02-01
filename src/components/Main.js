import PurchasesContainer from './PurchasesContainer';
import './Main.css';

const fetchPurchasesTest = async () => {
    return new Promise((resolve) => {
        const data = [
            {
                name: 'Apple',
                location: 'abc',
                purchasedOn: '2021-01-01',
                category: 'Technology',
                description: 'Lorem Ipsum...',
                price: 245.95
            },
            {
                name: 'Whole Foods',
                location: '',
                purchasedOn: '2021-01-01',
                category: 'Shipping',
                description: 'Lorem Ipsum...',
                price: 79.35
            },
            {
                name: 'ACM Theaters',
                location: 'xyz',
                purchasedOn: '2021-01-01',
                category: 'Entertaiment',
                description: 'Lorem Ipsum...',
                price: 22.75
            }          
        ];

        resolve({ data, ok: true });
    });
};

const fetchPurchases = async () => {
    const SERVICE_URL = 'https://storage.googleapis.com/marketplace-prod-7728-shop-cdn-e5e2/interview/data.json';
    
    try {
        const res = await fetch(SERVICE_URL);
        const data = await res.json();

        return {
            data,
            ok: true
        };
    } catch(err) {
        return {
            errMsg: err.message,
            ok: false
        };
    }
};

function Main() {
    return (
        <main>
            <PurchasesContainer
                pageSize={10}
                fetchData={fetchPurchases}
            />
        </main>
    )
}

export default Main;
