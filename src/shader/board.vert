attribute uint paint;
flat varying uint v_paint;

vec4 BoardVert(in vec4 pos) {
    v_paint = paint;

    return pos;
}
