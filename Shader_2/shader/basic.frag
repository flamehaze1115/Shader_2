#version 400
 
in  vec3 texCoord;
layout(location = 0) out vec4 fragColor;

uniform blobSettings{
	vec4 innerColor;
	vec4 outerColor;
	float radiusInner;
	float radiusOuter;
};

void main(void) {
    float dx = abs(texCoord.x) - 0.5;
    float dy = texCoord.y -0.5;
    float dist = sqrt(dx*dx + dy*dy);
    fragColor = mix(innerColor, outerColor, smoothstep(radiusInner, radiusOuter, dist));
   // fragColor = mix(innerColor, outerColor, dy);
    //fragColor = vec4(texCoord.x, texCoord.x, texCoord.x, 1.0);
}
