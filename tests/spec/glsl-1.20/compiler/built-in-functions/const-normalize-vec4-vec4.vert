/* [config]
 * expect_result: pass
 * glsl_version: 1.20
 * [end config]
 * Automatically generated by gen_constant_array_size_tests.py
 */
#version 120

float[length(vec4(-0.556407765836, 0.448498380947, 0.650828477615, 0.256284789113) - normalize(vec4(-1.65, 1.33, 1.93, 0.76))) < 0.001 ? 1 : -1] array0;
float[length(vec4(0.832881588662, -0.156165297874, -0.530962012772, 0.0) - normalize(vec4(0.8, -0.15, -0.51, 0.0))) < 0.001 ? 1 : -1] array1;

main()
{
  gl_Position  = vec4(array0.length()
			    + array1.length());
}
