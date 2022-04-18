vec4 Windy(in vec4 v) {
    float t = -time * 0.0007 + v.x*v.y*v.z*100.;
    float dst = 0.04;
    v.x += sin(t) * dst;
    v.y += cos(t) * dst/10.;
    v.z += sin(t) * dst;
    return v; 
}