import axios from "axios";
const CoinList = ({coinData}) => {
    return (
        <div>
            {coinData.coins.map((coin) => {
                return (
                    <div key={coin.id}>
                        <h1>{coin.name}</h1>
                        <img src={coin.icon} alt={coin.name}/>
                        <p>{coin.price}</p>
                    </div>
                );
            })}
        </div>
    )
}

// getStaticProps, getServerSideProps
export const getStaticProps = async () => {
    const data = await axios.get("https://api.coinstats.app/public/v1/coins?skip=0");

    return {
        props: {
            coinData: data.data,
        },
        revalidate: 10,
    };
}

export default CoinList;