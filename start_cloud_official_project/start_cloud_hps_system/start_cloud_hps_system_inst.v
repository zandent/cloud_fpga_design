	start_cloud_hps_system u0 (
		.clk_clk                       (<connected-to-clk_clk>),                       //      clk.clk
		.hex0_2_export                 (<connected-to-hex0_2_export>),                 //   hex0_2.export
		.hex3_5_export                 (<connected-to-hex3_5_export>),                 //   hex3_5.export
		.hps_io_0_hps_io_sdio_inst_CMD (<connected-to-hps_io_0_hps_io_sdio_inst_CMD>), // hps_io_0.hps_io_sdio_inst_CMD
		.hps_io_0_hps_io_sdio_inst_D0  (<connected-to-hps_io_0_hps_io_sdio_inst_D0>),  //         .hps_io_sdio_inst_D0
		.hps_io_0_hps_io_sdio_inst_D1  (<connected-to-hps_io_0_hps_io_sdio_inst_D1>),  //         .hps_io_sdio_inst_D1
		.hps_io_0_hps_io_sdio_inst_CLK (<connected-to-hps_io_0_hps_io_sdio_inst_CLK>), //         .hps_io_sdio_inst_CLK
		.hps_io_0_hps_io_sdio_inst_D2  (<connected-to-hps_io_0_hps_io_sdio_inst_D2>),  //         .hps_io_sdio_inst_D2
		.hps_io_0_hps_io_sdio_inst_D3  (<connected-to-hps_io_0_hps_io_sdio_inst_D3>),  //         .hps_io_sdio_inst_D3
		.hps_io_0_hps_io_uart0_inst_RX (<connected-to-hps_io_0_hps_io_uart0_inst_RX>), //         .hps_io_uart0_inst_RX
		.hps_io_0_hps_io_uart0_inst_TX (<connected-to-hps_io_0_hps_io_uart0_inst_TX>), //         .hps_io_uart0_inst_TX
		.key_export                    (<connected-to-key_export>),                    //      key.export
		.ledr_export                   (<connected-to-ledr_export>),                   //     ledr.export
		.memory_mem_a                  (<connected-to-memory_mem_a>),                  //   memory.mem_a
		.memory_mem_ba                 (<connected-to-memory_mem_ba>),                 //         .mem_ba
		.memory_mem_ck                 (<connected-to-memory_mem_ck>),                 //         .mem_ck
		.memory_mem_ck_n               (<connected-to-memory_mem_ck_n>),               //         .mem_ck_n
		.memory_mem_cke                (<connected-to-memory_mem_cke>),                //         .mem_cke
		.memory_mem_cs_n               (<connected-to-memory_mem_cs_n>),               //         .mem_cs_n
		.memory_mem_ras_n              (<connected-to-memory_mem_ras_n>),              //         .mem_ras_n
		.memory_mem_cas_n              (<connected-to-memory_mem_cas_n>),              //         .mem_cas_n
		.memory_mem_we_n               (<connected-to-memory_mem_we_n>),               //         .mem_we_n
		.memory_mem_reset_n            (<connected-to-memory_mem_reset_n>),            //         .mem_reset_n
		.memory_mem_dq                 (<connected-to-memory_mem_dq>),                 //         .mem_dq
		.memory_mem_dqs                (<connected-to-memory_mem_dqs>),                //         .mem_dqs
		.memory_mem_dqs_n              (<connected-to-memory_mem_dqs_n>),              //         .mem_dqs_n
		.memory_mem_odt                (<connected-to-memory_mem_odt>),                //         .mem_odt
		.memory_mem_dm                 (<connected-to-memory_mem_dm>),                 //         .mem_dm
		.memory_oct_rzqin              (<connected-to-memory_oct_rzqin>),              //         .oct_rzqin
		.reset_reset_n                 (<connected-to-reset_reset_n>),                 //    reset.reset_n
		.sw_export                     (<connected-to-sw_export>)                      //       sw.export
	);

