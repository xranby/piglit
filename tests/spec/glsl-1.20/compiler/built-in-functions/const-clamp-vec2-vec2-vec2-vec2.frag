/* [config]
 * expect_result: pass
 * glsl_version: 1.20
 * [end config]
 * Automatically generated by gen_constant_array_size_tests.py
 */
#version 120

float[length(vec2(-1.5, -1.5) - clamp(vec2(-2.0, -2.0), vec2(-1.5, -1.5), vec2(-1.5, 0.0))) < 0.001 ? 1 : -1] array0;
float[length(vec2(-1.5, 0.0) - clamp(vec2(-2.0, -2.0), vec2(-1.5, 0.0), vec2(1.5, 0.0))) < 0.001 ? 1 : -1] array1;
float[length(vec2(0.0, 1.5) - clamp(vec2(-2.0, -2.0), vec2(0.0, 1.5), vec2(1.5, 1.5))) < 0.001 ? 1 : -1] array2;
float[length(vec2(-1.5, -0.666666666667) - clamp(vec2(-0.666666666667, -0.666666666667), vec2(-1.5, -1.5), vec2(-1.5, 0.0))) < 0.001 ? 1 : -1] array3;
float[length(vec2(-0.666666666667, 0.0) - clamp(vec2(-0.666666666667, -0.666666666667), vec2(-1.5, 0.0), vec2(1.5, 0.0))) < 0.001 ? 1 : -1] array4;
float[length(vec2(0.0, 1.5) - clamp(vec2(-0.666666666667, -0.666666666667), vec2(0.0, 1.5), vec2(1.5, 1.5))) < 0.001 ? 1 : -1] array5;
float[length(vec2(-1.5, 0.0) - clamp(vec2(0.666666666667, 0.666666666667), vec2(-1.5, -1.5), vec2(-1.5, 0.0))) < 0.001 ? 1 : -1] array6;
float[length(vec2(0.666666666667, 0.0) - clamp(vec2(0.666666666667, 0.666666666667), vec2(-1.5, 0.0), vec2(1.5, 0.0))) < 0.001 ? 1 : -1] array7;
float[length(vec2(0.666666666667, 1.5) - clamp(vec2(0.666666666667, 0.666666666667), vec2(0.0, 1.5), vec2(1.5, 1.5))) < 0.001 ? 1 : -1] array8;
float[length(vec2(-1.5, 0.0) - clamp(vec2(2.0, 2.0), vec2(-1.5, -1.5), vec2(-1.5, 0.0))) < 0.001 ? 1 : -1] array9;
float[length(vec2(1.5, 0.0) - clamp(vec2(2.0, 2.0), vec2(-1.5, 0.0), vec2(1.5, 0.0))) < 0.001 ? 1 : -1] array10;
float[length(vec2(1.5, 1.5) - clamp(vec2(2.0, 2.0), vec2(0.0, 1.5), vec2(1.5, 1.5))) < 0.001 ? 1 : -1] array11;

main()
{
  gl_FragColor = vec4(array0.length()
			    + array1.length()
			    + array2.length()
			    + array3.length()
			    + array4.length()
			    + array5.length()
			    + array6.length()
			    + array7.length()
			    + array8.length()
			    + array9.length()
			    + array10.length()
			    + array11.length());
}
