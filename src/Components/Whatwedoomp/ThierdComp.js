const ThirdComp = () => {
    const Comp = () => {
        return (
            <>
                    <div className="col-2 d-flex justify-content-center p-4">
                        <div className="bg-light text-dark" style={{ height: "50px", width:'100%'}}>
                            <img alt="png image here" />
                        </div>
                    </div>
            </>
        )
    }
    return (
        <>
            <div style={{ paddingBlock:'50px' }}>
                <div className="text-white p-3 py-5">
                    <div className="text-center h2">Trusted by many.</div>
                    <div className="text-center fw-5">we partner with big and small</div>
                    <div>
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col-10">
                                <div className="row">
                                    <Comp/>
                                    <Comp/>
                                    <Comp/>
                                    <Comp/>
                                    <Comp/>
                                    <Comp/>
                                    <Comp/>
                                    <Comp/>
                                    <Comp/>
                                    <Comp/>
                                    <Comp/>
                                    <Comp/>
                                </div>
                            </div>
                            <div className="col-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThirdComp