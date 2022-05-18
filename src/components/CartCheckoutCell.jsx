


const CartCheckoutCell = ({nombreComercial,cantidad}) => {
    return(
        <>
            <tr className="product">
                <td data-title="Cantidad">
                    <div className="container-cart-utility-border product_quantity">
                        {cantidad}
                    </div>
                </td>
                <th className="container-cart-utility container-cart-utility-bordertest" scope="row">
                    <span>{nombreComercial}</span>
                </th>
            </tr>
        </>
    )
}

export default CartCheckoutCell;