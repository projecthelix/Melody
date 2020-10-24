 const typewriter = new Typewriter('#typewriter', {
                        delay: 10,
                        deleteSpeed: 0,
                        });

                        typewriter.callFunction((state) => {
                                 // hide cursor
                                 state.elements.cursor.style.display = 'none'
                        })
                        typewriter.typeString('(Pendiente...)')
                            typewriter.pauseFor(2500)
                            .deleteAll(0)
                            .pauseFor(500)
                            .typeString('(Estoy intentando ver que no sea tan automático)')
                            .pauseFor(2500)
                            .start();