/* [config]
 * expect_result: pass
 * glsl_version: 1.20
 * [end config]
 * Automatically generated by gen_constant_array_size_tests.py
 */
#version 120

float[length(vec2(-2.35619449019, -1.57079632679) - atan(vec2(-2.0, -2.0), vec2(-2.0, 0.0))) < 0.001 ? 1 : -1] array0;
float[length(vec2(-0.785398163397, 3.14159265359) - atan(vec2(-2.0, 0.0), vec2(2.0, -2.0))) < 0.001 ? 1 : -1] array1;
float[length(vec2(0.0, 2.35619449019) - atan(vec2(0.0, 2.0), vec2(2.0, -2.0))) < 0.001 ? 1 : -1] array2;
float[length(vec2(1.57079632679, 0.785398163397) - atan(vec2(2.0, 2.0), vec2(0.0, 2.0))) < 0.001 ? 1 : -1] array3;

main()
{
  gl_FragColor = vec4(array0.length()
			    + array1.length()
			    + array2.length()
			    + array3.length());
}
