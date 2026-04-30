/** Generated from Remote JSON Schema for ceph.rook.io.v1.CephObjectStore */

/**
 * CephObjectStore represents a Ceph Object Store Gateway
 */
export interface CephRookIoV1CephObjectStore {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion?: string;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind?: string;
  /**
   * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
   */
  metadata: {
    /**
     * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
     */
    annotations?: {
      [k: string]: string;
    };
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     */
    creationTimestamp?: string;
    /**
     * Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.
     */
    deletionGracePeriodSeconds?: number;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     */
    deletionTimestamp?: string;
    /**
     * Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list.
     */
    finalizers?: string[];
    /**
     * GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.
     *
     * If this field is specified and the generated name exists, the server will return a 409.
     *
     * Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency
     */
    generateName?: string;
    /**
     * A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.
     */
    generation?: number;
    /**
     * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
     */
    labels?: {
      [k: string]: string;
    };
    /**
     * ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like "ci-cd". The set of fields is always in the version that the workflow used when modifying the object.
     */
    managedFields?: {
      /**
       * APIVersion defines the version of this resource that this field set applies to. The format is "group/version" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted.
       */
      apiVersion?: string;
      /**
       * FieldsType is the discriminator for the different fields format and version. There is currently only one possible value: "FieldsV1"
       */
      fieldsType?: string;
      /**
       * FieldsV1 stores a set of fields in a data structure like a Trie, in JSON format.
       *
       * Each key is either a '.' representing the field itself, and will always map to an empty set, or a string representing a sub-field or item. The string will follow one of these four formats: 'f:<name>', where <name> is the name of a field in a struct, or key in a map 'v:<value>', where <value> is the exact json formatted value of a list item 'i:<index>', where <index> is position of a item in a list 'k:<keys>', where <keys> is a map of  a list item's key fields to their unique values If a key maps to an empty Fields value, the field that key represents is part of the set.
       *
       * The exact format is defined in sigs.k8s.io/structured-merge-diff
       */
      fieldsV1?: {
        [k: string]: unknown;
      };
      /**
       * Manager is an identifier of the workflow managing these fields.
       */
      manager?: string;
      /**
       * Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are 'Apply' and 'Update'.
       */
      operation?: string;
      /**
       * Subresource is the name of the subresource used to update that object, or empty string if the object was updated through the main resource. The value of this field is used to distinguish between managers, even if they share the same name. For example, a status update will be distinct from a regular update using the same manager name. Note that the APIVersion field is not related to the Subresource field and it always corresponds to the version of the main resource.
       */
      subresource?: string;
      /**
       * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
       */
      time?: string;
      [k: string]: unknown;
    }[];
    /**
     * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
     */
    name?: string;
    /**
     * Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.
     *
     * Must be a DNS_LABEL. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces
     */
    namespace?: string;
    /**
     * List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.
     */
    ownerReferences?: {
      /**
       * API version of the referent.
       */
      apiVersion: string;
      /**
       * If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. See https://kubernetes.io/docs/concepts/architecture/garbage-collection/#foreground-deletion for how the garbage collector interacts with this field and enforces the foreground deletion. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.
       */
      blockOwnerDeletion?: boolean;
      /**
       * If true, this reference points to the managing controller.
       */
      controller?: boolean;
      /**
       * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
       */
      kind: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
       */
      name: string;
      /**
       * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
       */
      uid: string;
      [k: string]: unknown;
    }[];
    /**
     * An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.
     *
     * Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
     */
    resourceVersion?: string;
    /**
     * Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.
     */
    selfLink?: string;
    /**
     * UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.
     *
     * Populated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
     */
    uid?: string;
    [k: string]: unknown;
  };
  /**
   * ObjectStoreSpec represent the spec of a pool
   */
  spec: {
    /**
     * The list of allowed namespaces in addition to the object store namespace
     * where ceph object store users may be created. Specify "*" to allow all
     * namespaces, otherwise list individual namespaces that are to be allowed.
     * This is useful for applications that need object store credentials
     * to be created in their own namespace, where neither OBCs nor COSI
     * is being used to create buckets. The default is empty.
     */
    allowUsersInNamespaces?: string[];
    /**
     * The authentication configuration
     */
    auth?: {
      /**
       * The spec for Keystone
       */
      keystone?: {
        /**
         * The roles requires to serve requests.
         */
        acceptedRoles: string[];
        /**
         * Create new users in their own tenants of the same name. Possible values are true, false, swift and s3. The latter have the effect of splitting the identity space such that only the indicated protocol will use implicit tenants.
         */
        implicitTenants?: string;
        /**
         * The number of seconds between token revocation checks.
         */
        revocationInterval?: number;
        /**
         * The name of the secret containing the credentials for the service user account used by RGW. It has to be in the same namespace as the object store resource.
         */
        serviceUserSecretName: string;
        /**
         * The maximum number of entries in each Keystone token cache.
         */
        tokenCacheSize?: number;
        /**
         * The URL for the Keystone server.
         */
        url: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    /**
     * The data pool settings
     */
    dataPool?: {
      /**
       * The application name to set on the pool. Only expected to be set for rgw pools.
       */
      application?: string;
      /**
       * DEPRECATED: use Parameters instead, e.g., Parameters["compression_mode"] = "force"
       * The inline compression mode in Bluestore OSD to set to (options are: none, passive, aggressive, force)
       * Do NOT set a default value for kubebuilder as this will override the Parameters
       */
      compressionMode?: 'none' | 'passive' | 'aggressive' | 'force' | '';
      /**
       * The root of the crush hierarchy utilized by the pool
       */
      crushRoot?: string;
      /**
       * The device class the OSD should set to for use in the pool
       */
      deviceClass?: string;
      /**
       * Allow rook operator to change the pool CRUSH tunables once the pool is created
       */
      enableCrushUpdates?: boolean;
      /**
       * EnableRBDStats is used to enable gathering of statistics for all RBD images in the pool
       */
      enableRBDStats?: boolean;
      /**
       * The erasure code settings
       */
      erasureCoded?: {
        /**
         * The algorithm for erasure coding.
         * If absent, defaults to the plugin specified in osd_pool_default_erasure_code_profile.
         */
        algorithm?: 'isa' | 'jerasure';
        /**
         * Number of coding chunks per object in an erasure coded storage pool (required for erasure-coded pool type).
         * This is the number of OSDs that can be lost simultaneously before data cannot be recovered.
         */
        codingChunks: number;
        /**
         * Number of data chunks per object in an erasure coded storage pool (required for erasure-coded pool type).
         * The number of chunks required to recover an object when any single OSD is lost is the same
         * as dataChunks so be aware that the larger the number of data chunks, the higher the cost of recovery.
         */
        dataChunks: number;
        [k: string]: unknown;
      };
      /**
       * The failure domain: osd/host/(region or zone if available) - technically also any type in the crush map
       */
      failureDomain?: string;
      /**
       * The mirroring settings
       */
      mirroring?: {
        /**
         * Enabled whether this pool is mirrored or not
         */
        enabled?: boolean;
        /**
         * Mode is the mirroring mode: pool, image or init-only.
         */
        mode?: 'pool' | 'image' | 'init-only';
        /**
         * Peers represents the peers spec
         */
        peers?: {
          /**
           * SecretNames represents the Kubernetes Secret names to add rbd-mirror or cephfs-mirror peers
           */
          secretNames?: string[];
          [k: string]: unknown;
        };
        /**
         * SnapshotSchedules is the scheduling of snapshot for mirrored images/pools
         */
        snapshotSchedules?: {
          /**
           * Interval represent the periodicity of the snapshot.
           */
          interval?: string;
          /**
           * Path is the path to snapshot, only valid for CephFS
           */
          path?: string;
          /**
           * StartTime indicates when to start the snapshot
           */
          startTime?: string;
          [k: string]: unknown;
        }[];
        [k: string]: unknown;
      };
      /**
       * Parameters is a list of properties to enable on a given pool
       */
      parameters?: {
        [k: string]: string;
      };
      /**
       * The quota settings
       */
      quotas?: {
        /**
         * MaxBytes represents the quota in bytes
         * Deprecated in favor of MaxSize
         */
        maxBytes?: number;
        /**
         * MaxObjects represents the quota in objects
         */
        maxObjects?: number;
        /**
         * MaxSize represents the quota in bytes as a string
         */
        maxSize?: string;
        [k: string]: unknown;
      };
      /**
       * The replication settings
       */
      replicated?: {
        /**
         * HybridStorage represents hybrid storage tier settings
         */
        hybridStorage?: {
          /**
           * PrimaryDeviceClass represents high performance tier (for example SSD or NVME) for Primary OSD
           */
          primaryDeviceClass: string;
          /**
           * SecondaryDeviceClass represents low performance tier (for example HDDs) for remaining OSDs
           */
          secondaryDeviceClass: string;
          [k: string]: unknown;
        };
        /**
         * ReplicasPerFailureDomain the number of replica in the specified failure domain
         */
        replicasPerFailureDomain?: number;
        /**
         * RequireSafeReplicaSize if false allows you to set replica 1
         */
        requireSafeReplicaSize?: boolean;
        /**
         * Size - Number of copies per object in a replicated storage pool, including the object itself (required for replicated pool type)
         */
        size: number;
        /**
         * SubFailureDomain the name of the sub-failure domain
         */
        subFailureDomain?: string;
        /**
         * TargetSizeRatio gives a hint (%) to Ceph in terms of expected consumption of the total cluster capacity
         */
        targetSizeRatio?: number;
        [k: string]: unknown;
      };
      /**
       * The mirroring statusCheck
       */
      statusCheck?: {
        /**
         * HealthCheckSpec represents the health check of an object store bucket
         */
        mirror?: {
          disabled?: boolean;
          /**
           * Interval is the internal in second or minute for the health check to run like 60s for 60 seconds
           */
          interval?: string;
          timeout?: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    /**
     * Set this realm as the default in Ceph. Only one realm should be default.
     * Do not set this true on more than one CephObjectStore.
     * This may not be set when zone is also specified; in this case, the realm
     * referenced by the zone's zonegroup should configure defaulting behavior.
     */
    defaultRealm?: boolean;
    /**
     * The rgw pod info
     */
    gateway?: {
      /**
       * AdditionalVolumeMounts allows additional volumes to be mounted to the RGW pod.
       * The root directory for each additional volume mount is `/var/rgw`.
       * Example: for an additional mount at subPath `ldap`, mounted from a secret that has key
       * `bindpass.secret`, the file would reside at `/var/rgw/ldap/bindpass.secret`.
       */
      additionalVolumeMounts?: {
        /**
         * SubPath defines the sub-path (subdirectory) of the directory root where the volumeSource will
         * be mounted. All files/keys in the volume source's volume will be mounted to the subdirectory.
         * This is not the same as the Kubernetes `subPath` volume mount option.
         * Each subPath definition must be unique and must not contain ':'.
         */
        subPath: string;
        volumeSource: {
          configMap?: {
            defaultMode?: number;
            items?: {
              key: string;
              mode?: number;
              path: string;
              [k: string]: unknown;
            }[];
            name?: string;
            optional?: boolean;
            [k: string]: unknown;
          };
          emptyDir?: {
            medium?: string;
            sizeLimit?: number | string;
            [k: string]: unknown;
          };
          hostPath?: {
            path: string;
            type?: string;
            [k: string]: unknown;
          };
          persistentVolumeClaim?: {
            claimName: string;
            readOnly?: boolean;
            [k: string]: unknown;
          };
          projected?: {
            defaultMode?: number;
            sources?: {
              clusterTrustBundle?: {
                labelSelector?: {
                  matchExpressions?: {
                    key: string;
                    operator: string;
                    values?: string[];
                    [k: string]: unknown;
                  }[];
                  matchLabels?: {
                    [k: string]: string;
                  };
                  [k: string]: unknown;
                };
                name?: string;
                optional?: boolean;
                path: string;
                signerName?: string;
                [k: string]: unknown;
              };
              configMap?: {
                items?: {
                  key: string;
                  mode?: number;
                  path: string;
                  [k: string]: unknown;
                }[];
                name?: string;
                optional?: boolean;
                [k: string]: unknown;
              };
              downwardAPI?: {
                items?: {
                  fieldRef?: {
                    apiVersion?: string;
                    fieldPath: string;
                    [k: string]: unknown;
                  };
                  mode?: number;
                  path: string;
                  resourceFieldRef?: {
                    containerName?: string;
                    divisor?: number | string;
                    resource: string;
                    [k: string]: unknown;
                  };
                  [k: string]: unknown;
                }[];
                [k: string]: unknown;
              };
              podCertificate?: {
                certificateChainPath?: string;
                credentialBundlePath?: string;
                keyPath?: string;
                keyType: string;
                maxExpirationSeconds?: number;
                signerName: string;
                userAnnotations?: {
                  [k: string]: string;
                };
                [k: string]: unknown;
              };
              secret?: {
                items?: {
                  key: string;
                  mode?: number;
                  path: string;
                  [k: string]: unknown;
                }[];
                name?: string;
                optional?: boolean;
                [k: string]: unknown;
              };
              serviceAccountToken?: {
                audience?: string;
                expirationSeconds?: number;
                path: string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            }[];
            [k: string]: unknown;
          };
          secret?: {
            defaultMode?: number;
            items?: {
              key: string;
              mode?: number;
              path: string;
              [k: string]: unknown;
            }[];
            optional?: boolean;
            secretName?: string;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      /**
       * The annotations-related configuration to add/set on each Pod related object.
       */
      annotations?: {
        [k: string]: string;
      };
      /**
       * The name of the secret that stores custom ca-bundle with root and intermediate certificates.
       */
      caBundleRef?: string;
      /**
       * Whether rgw dashboard is enabled for the rgw daemon. If not set, the rgw dashboard will be enabled.
       */
      dashboardEnabled?: boolean;
      /**
       * DisableMultisiteSyncTraffic, when true, prevents this object store's gateways from
       * transmitting multisite replication data. Note that this value does not affect whether
       * gateways receive multisite replication traffic: see ObjectZone.spec.customEndpoints for that.
       * If false or unset, this object store's gateways will be able to transmit multisite
       * replication data.
       */
      disableMultisiteSyncTraffic?: boolean;
      /**
       * ExternalRgwEndpoints points to external RGW endpoint(s). Multiple endpoints can be given, but
       * for stability of ObjectBucketClaims, we highly recommend that users give only a single
       * external RGW endpoint that is a load balancer that sends requests to the multiple RGWs.
       */
      externalRgwEndpoints?: {
        /**
         * The DNS-addressable Hostname of this endpoint. This field will be preferred over IP if both are given.
         */
        hostname?: string;
        /**
         * The IP of this endpoint. As a legacy behavior, this supports being given a DNS-addressable hostname as well.
         */
        ip?: string;
        [k: string]: unknown;
      }[];
      /**
       * Whether host networking is enabled for the rgw daemon. If not set, the network settings from the cluster CR will be applied.
       */
      hostNetwork?: boolean;
      /**
       * The number of pods in the rgw replicaset.
       */
      instances?: number;
      /**
       * The labels-related configuration to add/set on each Pod related object.
       */
      labels?: {
        [k: string]: string;
      };
      /**
       * Enable enhanced operation Logs for S3 in a sidecar named ops-log
       */
      opsLogSidecar?: {
        /**
         * Resources represents the way to specify resource requirements for the ops-log sidecar
         */
        resources?: {
          /**
           * Claims lists the names of resources, defined in spec.resourceClaims,
           * that are used by this container.
           *
           * This field depends on the
           * DynamicResourceAllocation feature gate.
           *
           * This field is immutable. It can only be set for containers.
           */
          claims?: {
            /**
             * Name must match the name of one entry in pod.spec.resourceClaims of
             * the Pod where this field is used. It makes that resource available
             * inside a container.
             */
            name: string;
            /**
             * Request is the name chosen for a request in the referenced claim.
             * If empty, everything from the claim is made available, otherwise
             * only the result of this request.
             */
            request?: string;
            [k: string]: unknown;
          }[];
          /**
           * Limits describes the maximum amount of compute resources allowed.
           * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
           */
          limits?: {
            [k: string]: number | string;
          };
          /**
           * Requests describes the minimum amount of compute resources required.
           * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
           * otherwise to an implementation-defined value. Requests cannot exceed Limits.
           * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
           */
          requests?: {
            [k: string]: number | string;
          };
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      placement?: {
        nodeAffinity?: {
          preferredDuringSchedulingIgnoredDuringExecution?: {
            preference: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
                [k: string]: unknown;
              }[];
              matchFields?: {
                key: string;
                operator: string;
                values?: string[];
                [k: string]: unknown;
              }[];
              [k: string]: unknown;
            };
            weight: number;
            [k: string]: unknown;
          }[];
          requiredDuringSchedulingIgnoredDuringExecution?: {
            nodeSelectorTerms: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
                [k: string]: unknown;
              }[];
              matchFields?: {
                key: string;
                operator: string;
                values?: string[];
                [k: string]: unknown;
              }[];
              [k: string]: unknown;
            }[];
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        podAffinity?: {
          preferredDuringSchedulingIgnoredDuringExecution?: {
            podAffinityTerm: {
              labelSelector?: {
                matchExpressions?: {
                  key: string;
                  operator: string;
                  values?: string[];
                  [k: string]: unknown;
                }[];
                matchLabels?: {
                  [k: string]: string;
                };
                [k: string]: unknown;
              };
              matchLabelKeys?: string[];
              mismatchLabelKeys?: string[];
              namespaceSelector?: {
                matchExpressions?: {
                  key: string;
                  operator: string;
                  values?: string[];
                  [k: string]: unknown;
                }[];
                matchLabels?: {
                  [k: string]: string;
                };
                [k: string]: unknown;
              };
              namespaces?: string[];
              topologyKey: string;
              [k: string]: unknown;
            };
            weight: number;
            [k: string]: unknown;
          }[];
          requiredDuringSchedulingIgnoredDuringExecution?: {
            labelSelector?: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
                [k: string]: unknown;
              }[];
              matchLabels?: {
                [k: string]: string;
              };
              [k: string]: unknown;
            };
            matchLabelKeys?: string[];
            mismatchLabelKeys?: string[];
            namespaceSelector?: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
                [k: string]: unknown;
              }[];
              matchLabels?: {
                [k: string]: string;
              };
              [k: string]: unknown;
            };
            namespaces?: string[];
            topologyKey: string;
            [k: string]: unknown;
          }[];
          [k: string]: unknown;
        };
        podAntiAffinity?: {
          preferredDuringSchedulingIgnoredDuringExecution?: {
            podAffinityTerm: {
              labelSelector?: {
                matchExpressions?: {
                  key: string;
                  operator: string;
                  values?: string[];
                  [k: string]: unknown;
                }[];
                matchLabels?: {
                  [k: string]: string;
                };
                [k: string]: unknown;
              };
              matchLabelKeys?: string[];
              mismatchLabelKeys?: string[];
              namespaceSelector?: {
                matchExpressions?: {
                  key: string;
                  operator: string;
                  values?: string[];
                  [k: string]: unknown;
                }[];
                matchLabels?: {
                  [k: string]: string;
                };
                [k: string]: unknown;
              };
              namespaces?: string[];
              topologyKey: string;
              [k: string]: unknown;
            };
            weight: number;
            [k: string]: unknown;
          }[];
          requiredDuringSchedulingIgnoredDuringExecution?: {
            labelSelector?: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
                [k: string]: unknown;
              }[];
              matchLabels?: {
                [k: string]: string;
              };
              [k: string]: unknown;
            };
            matchLabelKeys?: string[];
            mismatchLabelKeys?: string[];
            namespaceSelector?: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
                [k: string]: unknown;
              }[];
              matchLabels?: {
                [k: string]: string;
              };
              [k: string]: unknown;
            };
            namespaces?: string[];
            topologyKey: string;
            [k: string]: unknown;
          }[];
          [k: string]: unknown;
        };
        tolerations?: {
          effect?: string;
          key?: string;
          operator?: string;
          tolerationSeconds?: number;
          value?: string;
          [k: string]: unknown;
        }[];
        topologySpreadConstraints?: {
          labelSelector?: {
            matchExpressions?: {
              key: string;
              operator: string;
              values?: string[];
              [k: string]: unknown;
            }[];
            matchLabels?: {
              [k: string]: string;
            };
            [k: string]: unknown;
          };
          matchLabelKeys?: string[];
          maxSkew: number;
          minDomains?: number;
          nodeAffinityPolicy?: string;
          nodeTaintsPolicy?: string;
          topologyKey: string;
          whenUnsatisfiable: string;
          [k: string]: unknown;
        }[];
        [k: string]: unknown;
      };
      /**
       * The port the rgw service will be listening on (http)
       */
      port?: number;
      /**
       * PriorityClassName sets priority classes on the rgw pods
       */
      priorityClassName?: string;
      /**
       * ReadAffinity defines the RGW read affinity policy to optimize the read requests for the RGW clients
       * Note: Only supported from Ceph Tentacle (v20)
       */
      readAffinity?: {
        /**
         * Type defines the RGW ReadAffinity type
         * localize: read from the nearest OSD based on crush location of the RGW client
         * balance: picks a random OSD from the PG's active set
         * default: read from the primary OSD
         */
        type: 'localize' | 'balance' | 'default';
        [k: string]: unknown;
      };
      /**
       * The resource requirements for the rgw pods
       */
      resources?: {
        /**
         * Claims lists the names of resources, defined in spec.resourceClaims,
         * that are used by this container.
         *
         * This field depends on the
         * DynamicResourceAllocation feature gate.
         *
         * This field is immutable. It can only be set for containers.
         */
        claims?: {
          /**
           * Name must match the name of one entry in pod.spec.resourceClaims of
           * the Pod where this field is used. It makes that resource available
           * inside a container.
           */
          name: string;
          /**
           * Request is the name chosen for a request in the referenced claim.
           * If empty, everything from the claim is made available, otherwise
           * only the result of this request.
           */
          request?: string;
          [k: string]: unknown;
        }[];
        /**
         * Limits describes the maximum amount of compute resources allowed.
         * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
         */
        limits?: {
          [k: string]: number | string;
        };
        /**
         * Requests describes the minimum amount of compute resources required.
         * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
         * otherwise to an implementation-defined value. Requests cannot exceed Limits.
         * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
         */
        requests?: {
          [k: string]: number | string;
        };
        [k: string]: unknown;
      };
      /**
       * RgwCommandFlags sets Ceph RGW config values for the gateway clients that serve this object
       * store. Values are modified at RGW startup, resulting in RGW pod restarts.
       * This feature is intended for advanced users. It allows breaking configurations to be easily
       * applied. Use with caution.
       */
      rgwCommandFlags?: {
        [k: string]: string;
      };
      /**
       * RgwConfig sets Ceph RGW config values for the gateway clients that serve this object store.
       * Values are modified at runtime without RGW restart.
       * This feature is intended for advanced users. It allows breaking configurations to be easily
       * applied. Use with caution.
       */
      rgwConfig?: {
        [k: string]: string;
      };
      /**
       * RgwConfigFromSecret works exactly like RgwConfig but takes config value from Secret Key reference.
       * Values are modified at runtime without RGW restart.
       * This feature is intended for advanced users. It allows breaking configurations to be easily
       * applied. Use with caution.
       */
      rgwConfigFromSecret?: {
        /**
         * SecretKeySelector selects a key of a Secret.
         */
        [k: string]: {
          /**
           * The key of the secret to select from.  Must be a valid secret key.
           */
          key: string;
          /**
           * Name of the referent.
           * This field is effectively required, but due to backwards compatibility is
           * allowed to be empty. Instances of this type with an empty value here are
           * almost certainly wrong.
           * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          name?: string;
          /**
           * Specify whether the Secret or its key must be defined
           */
          optional?: boolean;
          [k: string]: unknown;
        };
      };
      /**
       * The port the rgw service will be listening on (https)
       */
      securePort?: number;
      /**
       * The configuration related to add/set on each rgw service.
       */
      service?: {
        /**
         * The annotations-related configuration to add/set on each rgw service.
         * nullable
         * optional
         */
        annotations?: {
          [k: string]: string;
        };
        /**
         * The labels-related configuration to add/set on each rgw service.
         */
        labels?: {
          [k: string]: string;
        };
        [k: string]: unknown;
      };
      /**
       * The name of the secret that stores the ssl certificate for secure rgw connections
       */
      sslCertificateRef?: string;
      [k: string]: unknown;
    };
    /**
     * The RGW health probes
     */
    healthCheck?: {
      /**
       * ProbeSpec is a wrapper around Probe so it can be enabled or disabled for a Ceph daemon
       */
      readinessProbe?: {
        /**
         * Disabled determines whether probe is disable or not
         */
        disabled?: boolean;
        /**
         * Probe describes a health check to be performed against a container to determine whether it is
         * alive or ready to receive traffic.
         */
        probe?: {
          /**
           * Exec specifies a command to execute in the container.
           */
          exec?: {
            /**
             * Command is the command line to execute inside the container, the working directory for the
             * command  is root ('/') in the container's filesystem. The command is simply exec'd, it is
             * not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use
             * a shell, you need to explicitly call out to that shell.
             * Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
             */
            command?: string[];
            [k: string]: unknown;
          };
          /**
           * Minimum consecutive failures for the probe to be considered failed after having succeeded.
           * Defaults to 3. Minimum value is 1.
           */
          failureThreshold?: number;
          /**
           * GRPC specifies a GRPC HealthCheckRequest.
           */
          grpc?: {
            /**
             * Port number of the gRPC service. Number must be in the range 1 to 65535.
             */
            port: number;
            /**
             * Service is the name of the service to place in the gRPC HealthCheckRequest
             * (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
             *
             * If this is not specified, the default behavior is defined by gRPC.
             */
            service?: string;
            [k: string]: unknown;
          };
          /**
           * HTTPGet specifies an HTTP GET request to perform.
           */
          httpGet?: {
            /**
             * Host name to connect to, defaults to the pod IP. You probably want to set
             * "Host" in httpHeaders instead.
             */
            host?: string;
            /**
             * Custom headers to set in the request. HTTP allows repeated headers.
             */
            httpHeaders?: {
              /**
               * The header field name.
               * This will be canonicalized upon output, so case-variant names will be understood as the same header.
               */
              name: string;
              /**
               * The header field value
               */
              value: string;
              [k: string]: unknown;
            }[];
            /**
             * Path to access on the HTTP server.
             */
            path?: string;
            /**
             * Name or number of the port to access on the container.
             * Number must be in the range 1 to 65535.
             * Name must be an IANA_SVC_NAME.
             */
            port: number | string;
            /**
             * Scheme to use for connecting to the host.
             * Defaults to HTTP.
             */
            scheme?: string;
            [k: string]: unknown;
          };
          /**
           * Number of seconds after the container has started before liveness probes are initiated.
           * More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
           */
          initialDelaySeconds?: number;
          /**
           * How often (in seconds) to perform the probe.
           * Default to 10 seconds. Minimum value is 1.
           */
          periodSeconds?: number;
          /**
           * Minimum consecutive successes for the probe to be considered successful after having failed.
           * Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
           */
          successThreshold?: number;
          /**
           * TCPSocket specifies a connection to a TCP port.
           */
          tcpSocket?: {
            /**
             * Optional: Host name to connect to, defaults to the pod IP.
             */
            host?: string;
            /**
             * Number or name of the port to access on the container.
             * Number must be in the range 1 to 65535.
             * Name must be an IANA_SVC_NAME.
             */
            port: number | string;
            [k: string]: unknown;
          };
          terminationGracePeriodSeconds?: number;
          /**
           * Number of seconds after which the probe times out.
           * Defaults to 1 second. Minimum value is 1.
           * More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
           */
          timeoutSeconds?: number;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      /**
       * ProbeSpec is a wrapper around Probe so it can be enabled or disabled for a Ceph daemon
       */
      startupProbe?: {
        /**
         * Disabled determines whether probe is disable or not
         */
        disabled?: boolean;
        /**
         * Probe describes a health check to be performed against a container to determine whether it is
         * alive or ready to receive traffic.
         */
        probe?: {
          /**
           * Exec specifies a command to execute in the container.
           */
          exec?: {
            /**
             * Command is the command line to execute inside the container, the working directory for the
             * command  is root ('/') in the container's filesystem. The command is simply exec'd, it is
             * not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use
             * a shell, you need to explicitly call out to that shell.
             * Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
             */
            command?: string[];
            [k: string]: unknown;
          };
          /**
           * Minimum consecutive failures for the probe to be considered failed after having succeeded.
           * Defaults to 3. Minimum value is 1.
           */
          failureThreshold?: number;
          /**
           * GRPC specifies a GRPC HealthCheckRequest.
           */
          grpc?: {
            /**
             * Port number of the gRPC service. Number must be in the range 1 to 65535.
             */
            port: number;
            /**
             * Service is the name of the service to place in the gRPC HealthCheckRequest
             * (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
             *
             * If this is not specified, the default behavior is defined by gRPC.
             */
            service?: string;
            [k: string]: unknown;
          };
          /**
           * HTTPGet specifies an HTTP GET request to perform.
           */
          httpGet?: {
            /**
             * Host name to connect to, defaults to the pod IP. You probably want to set
             * "Host" in httpHeaders instead.
             */
            host?: string;
            /**
             * Custom headers to set in the request. HTTP allows repeated headers.
             */
            httpHeaders?: {
              /**
               * The header field name.
               * This will be canonicalized upon output, so case-variant names will be understood as the same header.
               */
              name: string;
              /**
               * The header field value
               */
              value: string;
              [k: string]: unknown;
            }[];
            /**
             * Path to access on the HTTP server.
             */
            path?: string;
            /**
             * Name or number of the port to access on the container.
             * Number must be in the range 1 to 65535.
             * Name must be an IANA_SVC_NAME.
             */
            port: number | string;
            /**
             * Scheme to use for connecting to the host.
             * Defaults to HTTP.
             */
            scheme?: string;
            [k: string]: unknown;
          };
          /**
           * Number of seconds after the container has started before liveness probes are initiated.
           * More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
           */
          initialDelaySeconds?: number;
          /**
           * How often (in seconds) to perform the probe.
           * Default to 10 seconds. Minimum value is 1.
           */
          periodSeconds?: number;
          /**
           * Minimum consecutive successes for the probe to be considered successful after having failed.
           * Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
           */
          successThreshold?: number;
          /**
           * TCPSocket specifies a connection to a TCP port.
           */
          tcpSocket?: {
            /**
             * Optional: Host name to connect to, defaults to the pod IP.
             */
            host?: string;
            /**
             * Number or name of the port to access on the container.
             * Number must be in the range 1 to 65535.
             * Name must be an IANA_SVC_NAME.
             */
            port: number | string;
            [k: string]: unknown;
          };
          terminationGracePeriodSeconds?: number;
          /**
           * Number of seconds after which the probe times out.
           * Defaults to 1 second. Minimum value is 1.
           * More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
           */
          timeoutSeconds?: number;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    /**
     * Hosting settings for the object store.
     * A common use case for hosting configuration is to inform Rook of endpoints that support DNS
     * wildcards, which in turn allows virtual host-style bucket addressing.
     */
    hosting?: {
      /**
       * AdvertiseEndpoint is the default endpoint Rook will return for resources dependent on this
       * object store. This endpoint will be returned to CephObjectStoreUsers, Object Bucket Claims,
       * and COSI Buckets/Accesses.
       * By default, Rook returns the endpoint for the object store's Kubernetes service using HTTPS
       * with `gateway.securePort` if it is defined (otherwise, HTTP with `gateway.port`).
       */
      advertiseEndpoint?: {
        /**
         * DnsName is the DNS name (in RFC-1123 format) of the endpoint.
         * If the DNS name corresponds to an endpoint with DNS wildcard support, do not include the
         * wildcard itself in the list of hostnames.
         * E.g., use "mystore.example.com" instead of "*.mystore.example.com".
         */
        dnsName: string;
        /**
         * Port is the port on which S3 connections can be made for this endpoint.
         */
        port: number;
        /**
         * UseTls defines whether the endpoint uses TLS (HTTPS) or not (HTTP).
         */
        useTls: boolean;
        [k: string]: unknown;
      };
      /**
       * A list of DNS host names on which object store gateways will accept client S3 connections.
       * When specified, object store gateways will reject client S3 connections to hostnames that are
       * not present in this list, so include all endpoints.
       * The object store's advertiseEndpoint and Kubernetes service endpoint, plus CephObjectZone
       * `customEndpoints` are automatically added to the list but may be set here again if desired.
       * Each DNS name must be valid according RFC-1123.
       * If the DNS name corresponds to an endpoint with DNS wildcard support, do not include the
       * wildcard itself in the list of hostnames.
       * E.g., use "mystore.example.com" instead of "*.mystore.example.com".
       */
      dnsNames?: string[];
      [k: string]: unknown;
    };
    /**
     * The metadata pool settings
     */
    metadataPool?: {
      /**
       * The application name to set on the pool. Only expected to be set for rgw pools.
       */
      application?: string;
      /**
       * DEPRECATED: use Parameters instead, e.g., Parameters["compression_mode"] = "force"
       * The inline compression mode in Bluestore OSD to set to (options are: none, passive, aggressive, force)
       * Do NOT set a default value for kubebuilder as this will override the Parameters
       */
      compressionMode?: 'none' | 'passive' | 'aggressive' | 'force' | '';
      /**
       * The root of the crush hierarchy utilized by the pool
       */
      crushRoot?: string;
      /**
       * The device class the OSD should set to for use in the pool
       */
      deviceClass?: string;
      /**
       * Allow rook operator to change the pool CRUSH tunables once the pool is created
       */
      enableCrushUpdates?: boolean;
      /**
       * EnableRBDStats is used to enable gathering of statistics for all RBD images in the pool
       */
      enableRBDStats?: boolean;
      /**
       * The erasure code settings
       */
      erasureCoded?: {
        /**
         * The algorithm for erasure coding.
         * If absent, defaults to the plugin specified in osd_pool_default_erasure_code_profile.
         */
        algorithm?: 'isa' | 'jerasure';
        /**
         * Number of coding chunks per object in an erasure coded storage pool (required for erasure-coded pool type).
         * This is the number of OSDs that can be lost simultaneously before data cannot be recovered.
         */
        codingChunks: number;
        /**
         * Number of data chunks per object in an erasure coded storage pool (required for erasure-coded pool type).
         * The number of chunks required to recover an object when any single OSD is lost is the same
         * as dataChunks so be aware that the larger the number of data chunks, the higher the cost of recovery.
         */
        dataChunks: number;
        [k: string]: unknown;
      };
      /**
       * The failure domain: osd/host/(region or zone if available) - technically also any type in the crush map
       */
      failureDomain?: string;
      /**
       * The mirroring settings
       */
      mirroring?: {
        /**
         * Enabled whether this pool is mirrored or not
         */
        enabled?: boolean;
        /**
         * Mode is the mirroring mode: pool, image or init-only.
         */
        mode?: 'pool' | 'image' | 'init-only';
        /**
         * Peers represents the peers spec
         */
        peers?: {
          /**
           * SecretNames represents the Kubernetes Secret names to add rbd-mirror or cephfs-mirror peers
           */
          secretNames?: string[];
          [k: string]: unknown;
        };
        /**
         * SnapshotSchedules is the scheduling of snapshot for mirrored images/pools
         */
        snapshotSchedules?: {
          /**
           * Interval represent the periodicity of the snapshot.
           */
          interval?: string;
          /**
           * Path is the path to snapshot, only valid for CephFS
           */
          path?: string;
          /**
           * StartTime indicates when to start the snapshot
           */
          startTime?: string;
          [k: string]: unknown;
        }[];
        [k: string]: unknown;
      };
      /**
       * Parameters is a list of properties to enable on a given pool
       */
      parameters?: {
        [k: string]: string;
      };
      /**
       * The quota settings
       */
      quotas?: {
        /**
         * MaxBytes represents the quota in bytes
         * Deprecated in favor of MaxSize
         */
        maxBytes?: number;
        /**
         * MaxObjects represents the quota in objects
         */
        maxObjects?: number;
        /**
         * MaxSize represents the quota in bytes as a string
         */
        maxSize?: string;
        [k: string]: unknown;
      };
      /**
       * The replication settings
       */
      replicated?: {
        /**
         * HybridStorage represents hybrid storage tier settings
         */
        hybridStorage?: {
          /**
           * PrimaryDeviceClass represents high performance tier (for example SSD or NVME) for Primary OSD
           */
          primaryDeviceClass: string;
          /**
           * SecondaryDeviceClass represents low performance tier (for example HDDs) for remaining OSDs
           */
          secondaryDeviceClass: string;
          [k: string]: unknown;
        };
        /**
         * ReplicasPerFailureDomain the number of replica in the specified failure domain
         */
        replicasPerFailureDomain?: number;
        /**
         * RequireSafeReplicaSize if false allows you to set replica 1
         */
        requireSafeReplicaSize?: boolean;
        /**
         * Size - Number of copies per object in a replicated storage pool, including the object itself (required for replicated pool type)
         */
        size: number;
        /**
         * SubFailureDomain the name of the sub-failure domain
         */
        subFailureDomain?: string;
        /**
         * TargetSizeRatio gives a hint (%) to Ceph in terms of expected consumption of the total cluster capacity
         */
        targetSizeRatio?: number;
        [k: string]: unknown;
      };
      /**
       * The mirroring statusCheck
       */
      statusCheck?: {
        /**
         * HealthCheckSpec represents the health check of an object store bucket
         */
        mirror?: {
          disabled?: boolean;
          /**
           * Interval is the internal in second or minute for the health check to run like 60s for 60 seconds
           */
          interval?: string;
          timeout?: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    /**
     * Preserve pools on object store deletion
     */
    preservePoolsOnDelete?: boolean;
    /**
     * The protocol specification
     */
    protocols?: {
      /**
       * Represents RGW 'rgw_enable_apis' config option. See: https://docs.ceph.com/en/reef/radosgw/config-ref/#confval-rgw_enable_apis
       * If no value provided then all APIs will be enabled: s3, s3website, swift, swift_auth, admin, sts, iam, notifications
       * If enabled APIs are set, all remaining APIs will be disabled.
       * This option overrides S3.Enabled value.
       */
      enableAPIs?: ('s3' | 's3website' | 'swift' | 'swift_auth' | 'admin' | 'sts' | 'iam' | 'notifications')[];
      /**
       * The spec for S3
       */
      s3?: {
        /**
         * Whether to use Keystone for authentication. This option maps directly to the rgw_s3_auth_use_keystone option. Enabling it allows generating S3 credentials via an OpenStack API call, see the docs. If not given, the defaults of the corresponding RGW option apply.
         */
        authUseKeystone?: boolean;
        /**
         * Deprecated: use protocol.enableAPIs instead.
         * Whether to enable S3. This defaults to true (even if protocols.s3 is not present in the CRD). This maintains backwards compatibility – by default S3 is enabled.
         */
        enabled?: boolean;
        [k: string]: unknown;
      };
      /**
       * The spec for Swift
       */
      swift?: {
        /**
         * Whether or not the Swift account name should be included in the Swift API URL. If set to false (the default), then the Swift API will listen on a URL formed like http://host:port/<rgw_swift_url_prefix>/v1. If set to true, the Swift API URL will be http://host:port/<rgw_swift_url_prefix>/v1/AUTH_<account_name>. You must set this option to true (and update the Keystone service catalog) if you want radosgw to support publicly-readable containers and temporary URLs.
         */
        accountInUrl?: boolean;
        /**
         * The URL prefix for the Swift API, to distinguish it from the S3 API endpoint. The default is swift, which makes the Swift API available at the URL http://host:port/swift/v1 (or http://host:port/swift/v1/AUTH_%(tenant_id)s if rgw swift account in url is enabled).
         */
        urlPrefix?: string;
        /**
         * Enables the Object Versioning of OpenStack Object Storage API. This allows clients to put the X-Versions-Location attribute on containers that should be versioned.
         */
        versioningEnabled?: boolean;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    /**
     * Security represents security settings
     */
    security?: {
      /**
       * KeyRotation defines options for Key Rotation.
       */
      keyRotation?: {
        /**
         * Enabled represents whether the key rotation is enabled.
         */
        enabled?: boolean;
        /**
         * Schedule represents the cron schedule for key rotation.
         */
        schedule?: string;
        [k: string]: unknown;
      };
      /**
       * KeyManagementService is the main Key Management option
       */
      kms?: {
        /**
         * ConnectionDetails contains the KMS connection details (address, port etc)
         */
        connectionDetails?: {
          [k: string]: string;
        };
        /**
         * TokenSecretName is the kubernetes secret containing the KMS token
         */
        tokenSecretName?: string;
        [k: string]: unknown;
      };
      /**
       * The settings for supporting AWS-SSE:S3 with RGW
       */
      s3?: {
        /**
         * ConnectionDetails contains the KMS connection details (address, port etc)
         */
        connectionDetails?: {
          [k: string]: string;
        };
        /**
         * TokenSecretName is the kubernetes secret containing the KMS token
         */
        tokenSecretName?: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    /**
     * The pool information when configuring RADOS namespaces in existing pools.
     */
    sharedPools?: {
      /**
       * The data pool used for creating RADOS namespaces in the object store
       */
      dataPoolName?: string;
      /**
       * The metadata pool used for creating RADOS namespaces in the object store
       */
      metadataPoolName?: string;
      /**
       * PoolPlacements control which Pools are associated with a particular RGW bucket.
       * Once PoolPlacements are defined, RGW client will be able to associate pool
       * with ObjectStore bucket by providing "<LocationConstraint>" during s3 bucket creation
       * or "X-Storage-Policy" header during swift container creation.
       * See: https://docs.ceph.com/en/latest/radosgw/placement/#placement-targets
       * PoolPlacement with name: "default" will be used as a default pool if no option
       * is provided during bucket creation.
       * If default placement is not provided, spec.sharedPools.dataPoolName and spec.sharedPools.MetadataPoolName will be used as default pools.
       * If spec.sharedPools are also empty, then RGW pools (spec.dataPool and spec.metadataPool) will be used as defaults.
       */
      poolPlacements?: {
        /**
         * The data pool used to store ObjectStore data that cannot use erasure coding (ex: multi-part uploads).
         * If dataPoolName is not erasure coded, then there is no need for dataNonECPoolName.
         * WARNING: Do not change this field after creation. Pool names are used in RADOS namespaces and renaming leads to data loss.
         */
        dataNonECPoolName?: string;
        /**
         * The data pool used to store ObjectStore objects data.
         * WARNING: Do not change this field after creation. Pool names are used in RADOS namespaces and renaming leads to data loss.
         */
        dataPoolName: string;
        /**
         * Sets given placement as default. Only one placement in the list can be marked as default.
         * Default is false.
         */
        default?: boolean;
        /**
         * The metadata pool used to store ObjectStore bucket index.
         * WARNING: Do not change this field after creation. Pool names are used in RADOS namespaces and renaming leads to data loss.
         */
        metadataPoolName: string;
        /**
         * Pool placement name. Name can be arbitrary. Placement with name "default" will be used as default.
         */
        name: string;
        /**
         * StorageClasses can be selected by user to override dataPoolName during object creation.
         * Each placement has default STANDARD StorageClass pointing to dataPoolName.
         * This list allows defining additional StorageClasses on top of default STANDARD storage class.
         *
         * @maxItems 10
         */
        storageClasses?: {
          /**
           * DataPoolName is the data pool used to store ObjectStore objects data.
           * WARNING: Do not change this field after creation. Pool names are used in RADOS namespaces and renaming leads to data loss.
           */
          dataPoolName: string;
          /**
           * Name is the StorageClass name. Ceph allows arbitrary name for StorageClasses,
           * however most clients/libs insist on AWS names so it is recommended to use
           * one of the valid x-amz-storage-class values for better compatibility:
           * REDUCED_REDUNDANCY | STANDARD_IA | ONEZONE_IA | INTELLIGENT_TIERING | GLACIER | DEEP_ARCHIVE | OUTPOSTS | GLACIER_IR | SNOW | EXPRESS_ONEZONE
           * See AWS docs: https://aws.amazon.com/de/s3/storage-classes/
           */
          name: string;
          [k: string]: unknown;
        }[];
        [k: string]: unknown;
      }[];
      /**
       * Whether the RADOS namespaces should be preserved on deletion of the object store
       */
      preserveRadosNamespaceDataOnDelete?: boolean;
      [k: string]: unknown;
    };
    /**
     * The multisite info
     */
    zone?: {
      /**
       * CephObjectStoreZone name this CephObjectStore is part of
       */
      name: string;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  /**
   * ObjectStoreStatus represents the status of a Ceph Object Store resource
   */
  status?: {
    cephx?: {
      /**
       * Daemon shows the CephX key status for local Ceph daemons associated with this resources.
       */
      daemon?: {
        /**
         * KeyCephVersion reports the Ceph version that created the current generation's keys. This is
         * same string format as reported by `CephCluster.status.version.version` to allow them to be
         * compared. E.g., `20.2.0-0`.
         * For all newly-created resources, this field set to the version of Ceph that created the key.
         * The special value "Uninitialized" indicates that keys are being created for the first time.
         * An empty string indicates that the version is unknown, as expected in brownfield deployments.
         */
        keyCephVersion?: string;
        /**
         * KeyGeneration represents the CephX key generation for the last successful reconcile.
         * For all newly-created resources, this field is set to `1`.
         * When keys are rotated due to any rotation policy, the generation is incremented or updated to
         * the configured policy generation.
         * Generation `0` indicates that keys existed prior to the implementation of key tracking.
         */
        keyGeneration?: number;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    conditions?: {
      lastHeartbeatTime?: string;
      lastTransitionTime?: string;
      message?: string;
      /**
       * ConditionReason is a reason for a condition
       */
      reason?: string;
      status?: string;
      /**
       * ConditionType represent a resource's status
       */
      type?: string;
      [k: string]: unknown;
    }[];
    endpoints?: {
      insecure?: string[];
      secure?: string[];
      [k: string]: unknown;
    };
    info?: {
      [k: string]: string;
    };
    message?: string;
    /**
     * ObservedGeneration is the latest generation observed by the controller.
     */
    observedGeneration?: number;
    /**
     * ConditionType represent a resource's status
     */
    phase?: string;
    replicas?: number;
    selector?: string;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
