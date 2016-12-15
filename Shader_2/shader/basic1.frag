#version 400

flat in vec3 LightIntensity;
out vec4 gl_FragColor;

void main(void)
{
	gl_FragColor = vec4(LightIntensity, 1.0);
	//gl_FragColor = vec4(0.1,1.0,0.1, 1.0);
}
