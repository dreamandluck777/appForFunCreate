type Actions = 'changeBlock' | 'skipBlock' | 'prevBlock';
interface ForAction {
type: Actions;
arrayLength: number;
}

type ForState = number;


export function reducerChangeTestBlocks (currentIndex : ForState, action : ForAction, ) {
    switch(action.type) {
        case 'changeBlock':
        case 'skipBlock':
            return currentIndex < action.arrayLength ? currentIndex + 1  : currentIndex;
        case 'prevBlock':
            return currentIndex ===  0 ? currentIndex : currentIndex - 1;
    }
};