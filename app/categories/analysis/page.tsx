export default function Home() {
    return (
        <main>
            <h1 style={{ textAlign: 'center', marginTop: '20px', fontSize: 70, color: '#5A9BD4', fontWeight: 50 }}>Analysis AI Models</h1>

            {/* Cards */}
            <div style={{
                display: 'column-reverse',
                justifyContent: 'center',
                gap: '20px',
                marginLeft: 100,
                marginTop: 30,
                flexWrap: 'wrap'
            }}>
                {/* Analysis Card */}
                <div style={{
                    backgroundColor: '#5A9BD4',
                    color: 'white',
                    borderRadius: '15px',
                    padding: '20px',
                    width: '1000px',
                    textAlign: 'left',
                    marginBottom: 30,
                    // marginRight: 100,
                    // justifyContent: 'center'
                }}>
                    <h2 style={{ fontSize: 30, marginBottom: 10 }}>Natural Language Processing</h2>
                    <p style={{ fontSize: 18 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button style={{
                        backgroundColor: '#FFF4B8',
                        border: 'none',
                        padding: '10px',
                        marginTop: '20px',
                        borderRadius: '10px',
                        width: 200,
                        cursor: 'pointer',
                        color: 'black',
                    }}><a href="analysis">Learn More</a></button>
                </div>

                {/* Generative Card */}
                <div style={{
                    backgroundColor: '#5A9BD4',
                    color: 'white',
                    borderRadius: '15px',
                    padding: '20px',
                    width: '350px',
                    textAlign: 'center',
                }}>
                    <h2 style={{ fontSize: 30, marginBottom: 10 }}>Generative</h2>
                    <p style={{ fontSize: 18 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button style={{
                        backgroundColor: '#FFF4B8',
                        border: 'none',
                        padding: '10px',
                        marginTop: '20px',
                        borderRadius: '10px',
                        width: 200,
                        cursor: 'pointer',
                        color: 'black'
                    }}>Learn More</button>
                </div>
            </div>

            {/* Coming Soon */}
            <h2 style={{ textAlign: 'center', marginBottom: '40px', marginTop: '50px', fontSize: 50 }}>More Coming Soon...</h2>
        </main>
    );
}
