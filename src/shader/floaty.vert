// time uniform
vec4 Floaty(in vec4 v) {
    float t = time * 0.00005 + v.x*v.y*v.z / 100.;
    float dst = 100.;
    v.x += sin(t) * dst + cos(t * 2.) * dst;
    v.y += cos(t) * dst/100. ;
    v.z += sin(t) * dst+ sin(t * 2.) * dst;
    return v;
}