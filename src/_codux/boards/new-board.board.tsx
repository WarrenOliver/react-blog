import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'New Board',
    Board: () => null,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 18
    }
});
