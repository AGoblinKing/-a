uniform sampler2D texmap;
uniform sampler2D paints;

flat varying uint v_paint;

vec4 BoardFrag(in vec4 col) {
    // look up paint by v_paint
    int i_paint = int(v_paint);
    vec2 paintCoord = vec2(float(i_paint % 256) / 256., float(v_paint) / 256. / 256.);

    // get the rgb from the paint
    vec4 paintColor = texture2D(paints, paintCoord);

    col.xyz = paintColor.xyz;

    return col;
}
