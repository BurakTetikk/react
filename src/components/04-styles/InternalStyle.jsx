import React from 'react';

const InternalStyle = () => {
    const hStyle = {
        border: '1px solid orange',
        padding: '1rem',
        textAlign: 'center',
        borderRadius: '2rem',
        color: 'red'
    }
    return (
        <div>
            <h1 style={hStyle}>Hello</h1>

            <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores cupiditate distinctio dolore eaque incidunt iste iusto minima, nam, natus nemo nobis placeat quasi sit voluptatibus voluptatum. Aliquid dignissimos mollitia quibusdam.</span><span>Blanditiis modi necessitatibus voluptate? Ab aliquam animi assumenda, dolorem ducimus facilis harum illum impedit, incidunt ipsum iusto maiores minus necessitatibus, perspiciatis possimus provident quibusdam sapiente sed sunt tempore totam veniam?</span><span>Beatae culpa cumque deleniti, dolorem eligendi facere magni nostrum obcaecati, quidem quis tempore veniam, vitae voluptates! Ab dolor nisi repellat. Adipisci, consequuntur eos eveniet illo iure praesentium quisquam sapiente voluptates.</span><span>Ab accusantium adipisci aperiam assumenda cumque deleniti dolorum ducimus ea esse fugit ipsam iste libero maiores natus nulla optio perferendis quae quia quibusdam quos sunt ullam, voluptatem voluptatibus. Eveniet, hic.</span>
            </p>

            <h1 style={{...hStyle, color: 'green'}}>Dilara</h1>

            <p>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores cupiditate distinctio dolore eaque incidunt iste iusto minima, nam, natus nemo nobis placeat quasi sit voluptatibus voluptatum. Aliquid dignissimos mollitia quibusdam.</span>
                <span>Blanditiis modi necessitatibus voluptate? Ab aliquam animi assumenda, dolorem ducimus facilis harum illum impedit, incidunt ipsum iusto maiores minus necessitatibus, perspiciatis possimus provident quibusdam sapiente sed sunt tempore totam veniam?</span>
                <span>Beatae culpa cumque deleniti, dolorem eligendi facere magni nostrum obcaecati, quidem quis tempore veniam, vitae voluptates! Ab dolor nisi repellat. Adipisci, consequuntur eos eveniet illo iure praesentium quisquam sapiente voluptates.</span>
                <span>Ab accusantium adipisci aperiam assumenda cumque deleniti dolorum ducimus ea esse fugit ipsam iste libero maiores natus nulla optio perferendis quae quia quibusdam quos sunt ullam, voluptatem voluptatibus. Eveniet, hic.</span>
            </p>
        </div>
    );
};

export default InternalStyle;