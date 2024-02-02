export const InitialData = {
    boards:  [
        {
            id : 'board1',
            columnOrder : ['todo' , 'doing' , 'done'],
            columns : [
                {
                    id : 'todo',
                    boardId : 'board1',
                    title : 'ToDo',
                    cardOrder : ['card1', 'card2', 'card3'],
                    cards: [
                        {
                            id: 'card1',
                            boardId: 'board1',
                            columnId: 'todo',
                            title: 'Hello, Myself Chirag Paliwal',
                            image: null
                        },
                        {
                            id: 'card2',
                            boardId: 'board1',
                            columnId: 'todo',
                            title: 'Pursuing MCA',
                            image: null
                        },
                        {
                            id: 'card3',
                            boardId: 'board1',
                            columnId: 'todo',
                            title: 'lorem lorem idbajb hvfasbj',
                            image: null
                        }
                    ]
                },
                {
                    id : 'doing',
                    boardId : 'board1',
                    title : 'Doing',
                    cardOrder : ['card4', 'card5', 'card6'],
                    cards: [
                        {
                            id: 'card4',
                            boardId: 'board1',
                            columnId: 'doing',
                            title: 'Hello guys chai pilo',
                            image: null
                        },
                        {
                            id: 'card5',
                            boardId: 'board1',
                            columnId: 'doing',
                            title: 'Hello guys coffee pilo',
                            image: null
                        },
                        {
                            id: 'card6',
                            boardId: 'board1',
                            columnId: 'doing',
                            title: 'Hello guys dudh pilo',
                            image: null
                        }
                    ]
                },
                {
                    id : 'done',
                    boardId : 'board1',
                    title : 'Done',
                    cardOrder : ['card7', 'card8', 'card9', 'card10', 'card11'],
                    cards: [
                        {
                            id: 'card7',
                            boardId: 'board1',
                            columnId: 'done',
                            title: 'Hello ',
                            image: null
                        },
                        {
                            id: 'card8',
                            boardId: 'board1',
                            columnId: 'done',
                            title: 'Hello guys ',
                            image: null
                        },
                        {
                            id: 'card9',
                            boardId: 'board1',
                            columnId: 'done',
                            title: 'Hello guys chai ',
                            image: null
                        },
                        {
                            id: 'card10',
                            boardId: 'board1',
                            columnId: 'done',
                            title: 'Hello ',
                            image: null
                        },
                        {
                            id: 'card11',
                            boardId: 'board1',
                            columnId: 'done',
                            title: 'Hello guys ',
                            image: null
                        }
                    ]
                }

            ]
        }
    ]
}