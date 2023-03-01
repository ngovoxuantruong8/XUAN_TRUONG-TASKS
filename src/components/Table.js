import "./Table.scss";

const Table = () => {
    return (
        <table className="table__container">
            <thead className="table__head">
                <tr>
                    <th>Rank</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody className="table__body">
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Thornton</td>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Thornton</td>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Thornton</td>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </table>
    );
};

export default Table;
