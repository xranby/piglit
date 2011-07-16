/* [config]
 * expect_result: pass
 * glsl_version: 1.20
 * [end config]
 * Automatically generated by gen_constant_array_size_tests.py
 */
#version 120

float[length(vec4(0.556407765836, -0.448498380947, -0.650828477615, -0.256284789113) - refract(vec4(-0.556407765836, 0.448498380947, 0.650828477615, 0.256284789113), vec4(-0.556407765836, 0.448498380947, 0.650828477615, 0.256284789113), 0.5)) < 0.001 ? 1 : -1] array0;
float[length(vec4(0.556407765836, -0.448498380947, -0.650828477615, -0.256284789113) - refract(vec4(-0.556407765836, 0.448498380947, 0.650828477615, 0.256284789113), vec4(-0.556407765836, 0.448498380947, 0.650828477615, 0.256284789113), 2.0)) < 0.001 ? 1 : -1] array1;
float[length(vec4(-0.7210112303, 0.307275568108, 0.607703922764, 0.128142394556) - refract(vec4(-0.556407765836, 0.448498380947, 0.650828477615, 0.256284789113), vec4(0.832881588662, -0.156165297874, -0.530962012772, 0.0), 0.5)) < 0.001 ? 1 : -1] array2;
float[length(vec4(0.100527594862, 0.669494925669, 0.528150712064, 0.512569578225) - refract(vec4(-0.556407765836, 0.448498380947, 0.650828477615, 0.256284789113), vec4(0.832881588662, -0.156165297874, -0.530962012772, 0.0), 2.0)) < 0.001 ? 1 : -1] array3;
float[length(vec4(0.712258891654, -0.316529963748, -0.611498538406, -0.136255608464) - refract(vec4(0.832881588662, -0.156165297874, -0.530962012772, 0.0), vec4(-0.556407765836, 0.448498380947, 0.650828477615, 0.256284789113), 0.5)) < 0.001 ? 1 : -1] array4;
float[length(vec4(0.855187523572, 0.341042506973, -0.11379613964, 0.373356058698) - refract(vec4(0.832881588662, -0.156165297874, -0.530962012772, 0.0), vec4(-0.556407765836, 0.448498380947, 0.650828477615, 0.256284789113), 2.0)) < 0.001 ? 1 : -1] array5;
float[length(vec4(-0.832881588662, 0.156165297874, 0.530962012772, 0.0) - refract(vec4(0.832881588662, -0.156165297874, -0.530962012772, 0.0), vec4(0.832881588662, -0.156165297874, -0.530962012772, 0.0), 0.5)) < 0.001 ? 1 : -1] array6;
float[length(vec4(-0.832881588662, 0.156165297874, 0.530962012772, 0.0) - refract(vec4(0.832881588662, -0.156165297874, -0.530962012772, 0.0), vec4(0.832881588662, -0.156165297874, -0.530962012772, 0.0), 2.0)) < 0.001 ? 1 : -1] array7;

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
