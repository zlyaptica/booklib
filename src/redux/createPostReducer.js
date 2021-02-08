const ADD_POST = 'ADD_POST'

let initialState = {
    posts: [{
        headerPost: 'Физика наука жизненная!',
        textPost: 'Фи́зика (от др.-греч. φύσις — природа) — область естествознания: наука о наиболее общих законах природы, о материи, её структуре, движении и правилах трансформации. Понятия физики и её законы лежат в основе всего естествознания[1][2]. Является точной наукой.\n' +
            '\n' +
            'Термин «физика» впервые фигурирует в сочинениях одного из величайших мыслителей древности — Аристотеля (IV век до нашей эры). Первоначально термины «физика» и «философия» были синонимами, так как в основе обеих дисциплин лежало стремление объяснить законы функционирования Вселенной. Однако в результате научной революции XVI века физика развилась в самостоятельную научную отрасль.\n' +
            '\n' +
            'В современном мире значение физики чрезвычайно велико. Всё то, чем отличается современное общество от общества прошлых веков, появилось в результате применения на практике физических открытий. Так, исследования в области электромагнетизма привели к появлению телефонов и позже мобильных телефонов, открытия в термодинамике позволили создать автомобиль, развитие электроники привело к появлению компьютеров. Развитие фотоники способно дать возможность создать принципиально новые — фотонные — компьютеры и другую фотонную технику, которые сменят существующую электронную технику. Развитие газодинамики привело к появлению самолётов и вертолётов.\n' +
            '\n' +
            'Знания физики процессов, происходящих в природе, постоянно расширяются и углубляются. Большинство новых открытий вскоре получают технико-экономическое применение (в частности в промышленности). Однако перед исследователями постоянно встают новые загадки, — обнаруживаются явления, для объяснения и понимания которых требуются новые физические теории. Несмотря на огромный объём накопленных знаний, современная физика ещё очень далека от того, чтобы объяснить все явления природы.\n' +
            '\n' +
            'Общенаучные основы физических методов разрабатываются в теории познания и методологии науки.\n' +
            '\n' +
            'В русский язык слово «физика» было введено М. В. Ломоносовым, издавшим первый в России учебник физики — свой перевод с немецкого языка учебника «Вольфианская экспериментальная физика» Х. Вольфа (1746)[3]. Первым оригинальным учебником физики на русском языке стал курс «Краткое начертание физики» (1810), написанный П. И. Страховым.'
    }],
}

const createPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                headerPost: action.newPostHeader,
                textPost: action.newPostText
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostHeader: '',
                newPostText: ''
            }
        default:
            return state
    }
}

export const addPost = (newPostHeader, newPostText) => ({type: ADD_POST, newPostHeader, newPostText})

export {createPostReducer}