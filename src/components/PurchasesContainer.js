import { useEffect, useState } from 'react';
import Purchases from './Purchases';

function PurchasesContainer({ fetchData }) {
    const [purchases, setPurchases] = useState([]);

    useEffect(() => {
        const genGetData = async () => {
            try {
                const res = await fetchData();
                // TODO: remove log
                console.log({
                    res
                });

                if (!res.ok) {
                    // TODO: handle error
                    alert(res.errMsg);
                    return;
                }

                const { data } = res;
                setPurchases(data);
            } catch (err) {
                // TODO: handle error
            }
        };

        genGetData();
    }, []);

    return (
        <section >
            <Purchases data={purchases} />
        </section>
    );
}

export default PurchasesContainer;