/* [config]
 * expect_result: pass
 * glsl_version: 1.20
 * [end config]
 * Automatically generated by gen_constant_array_size_tests.py
 */
#version 120

float[length(vec3(0.0, 0.997958886135, 1.0) - smoothstep(vec3(-1.9, -1.9, -1.9), vec3(-0.633333333333, -0.633333333333, -0.633333333333), vec3(-2.0, -0.666666666667, 0.666666666667))) < 0.001 ? 1 : -1] array0;
float[length(vec3(1.0, 0.0, 0.480267713952) - smoothstep(vec3(-1.9, -1.9, -1.9), vec3(-0.633333333333, 0.633333333333, 0.633333333333), vec3(2.0, -2.0, -0.666666666667))) < 0.001 ? 1 : -1] array1;
float[length(vec3(1.0, 1.0, 0.0) - smoothstep(vec3(-1.9, -1.9, -1.9), vec3(0.633333333333, 0.633333333333, 1.9), vec3(0.666666666667, 2.0, -2.0))) < 0.001 ? 1 : -1] array2;
float[length(vec3(0.247641649522, 0.752358350478, 1.0) - smoothstep(vec3(-1.9, -1.9, -1.9), vec3(1.9, 1.9, 1.9), vec3(-0.666666666667, 0.666666666667, 2.0))) < 0.001 ? 1 : -1] array3;
float[length(vec3(0.0, 0.0, 1.0) - smoothstep(vec3(-0.633333333333, -0.633333333333, -0.633333333333), vec3(0.633333333333, 0.633333333333, 0.633333333333), vec3(-2.0, -0.666666666667, 0.666666666667))) < 0.001 ? 1 : -1] array4;
float[length(vec3(1.0, 0.0, 0.0) - smoothstep(vec3(-0.633333333333, -0.633333333333, -0.633333333333), vec3(0.633333333333, 1.9, 1.9), vec3(2.0, -2.0, -0.666666666667))) < 0.001 ? 1 : -1] array5;
float[length(vec3(0.519732286048, 1.0, 0.0) - smoothstep(vec3(-0.633333333333, -0.633333333333, 0.633333333333), vec3(1.9, 1.9, 1.9), vec3(0.666666666667, 2.0, -2.0))) < 0.001 ? 1 : -1] array6;
float[length(vec3(0.0, 0.00204111386499, 1.0) - smoothstep(vec3(0.633333333333, 0.633333333333, 0.633333333333), vec3(1.9, 1.9, 1.9), vec3(-0.666666666667, 0.666666666667, 2.0))) < 0.001 ? 1 : -1] array7;

main()
{
  gl_FragColor = vec4(array0.length()
			    + array1.length()
			    + array2.length()
			    + array3.length()
			    + array4.length()
			    + array5.length()
			    + array6.length()
			    + array7.length());
}
