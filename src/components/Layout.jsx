import PropTypes from "prop-types"
import Header from "./Header"

export function Layout({ children }) {
    

    return (
        <>
            <div className="min-h-screen bg-gray-900 text-white">
                <Header />
                <main>{children}</main>
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}