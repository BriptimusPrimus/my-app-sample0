import PurchasesContainer from './PurchasesContainer';
import './Main.css';

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
