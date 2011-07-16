/* [config]
 * expect_result: pass
 * glsl_version: 1.20
 * [end config]
 * Automatically generated by gen_constant_array_size_tests.py
 */
#version 120

float[length(1.0 - refract(-1.0, -1.0, 0.5)) < 0.001 ? 1 : -1] array0;
float[length(1.0 - refract(-1.0, -1.0, 2.0)) < 0.001 ? 1 : -1] array1;
float[length(-1.0 - refract(-1.0, 1.0, 0.5)) < 0.001 ? 1 : -1] array2;
float[length(-1.0 - refract(-1.0, 1.0, 2.0)) < 0.001 ? 1 : -1] array3;
float[length(1.0 - refract(1.0, -1.0, 0.5)) < 0.001 ? 1 : -1] array4;
float[length(1.0 - refract(1.0, -1.0, 2.0)) < 0.001 ? 1 : -1] array5;
float[length(-1.0 - refract(1.0, 1.0, 0.5)) < 0.001 ? 1 : -1] array6;
float[length(-1.0 - refract(1.0, 1.0, 2.0)) < 0.001 ? 1 : -1] array7;

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
